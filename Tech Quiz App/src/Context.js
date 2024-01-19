import React, { useState, useContext, useEffect } from "react";
import Loading from "./Loading";

url = "https://opentdb.com/api.php?amount=20&category=18&difficulty=medium";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timer, setTimer] = useState(null);

  const fetchQuestions = () => {
    setLoading(true);
    setError(null);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error);
        setLoading(false);
      });
  };

  const checkAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizOver(true);
    }
  };

  useEffect(() => {
    if (!quizOver && questions.length > 0) {
      const id = setTimeout(() => {
        checkAnswer();
      }, 20000);
      setTimer(id);
    }
    return () => clearTimeout(timer);
  }, [quizOver, questions, currentQuestionIndex]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error loading questions!</p>;
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setQuizOver(false);
    setScore(0);
  };

  return (
    <AppContext.Provider
      value={{
        questions,
        setQuestions,
        score,
        setScore,
        quizOver,
        setQuizOver,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        loading,
        setLoading,
        error,
        setError,
        fetchQuestions,
        checkAnswer,
        resetQuiz,
        timer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
