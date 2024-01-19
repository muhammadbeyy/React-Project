import React from "react";
import { useGlobalContext } from "./Context";

const Quiz = () => {
  const {
    questions,
    setQuestions,
    score,
    setScore,
    quizOver,
    setQuizOver,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    fetchQuestions,
    checkAnswer,
    resetQuiz,
    timer,
  } = useGlobalContext();

  //Fisher-Yates Shuffle
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const renderChoices = (question) => {
    if (!question) return [];

    const allChoices = [...question.incorrect_answers, question.correct_answer];
    return shuffleArray(allChoices);
  };

  const handleChoiceSelect = (choice) => {
    const correctAnswer = questions[currentQuestionIndex].correct_answer;
    checkAnswer(choice === correctAnswer);
    clearTimeout(timer);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setQuizOver(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleTryAgain = () => {
    resetQuiz();
  };

  const numberQuestions = questions.length;
  const percentage = (score / numberQuestions) * 100;

  return (
    <div className="quiz-container">
      {quizOver ? (
        <div className="score-display">
          <p>Your score is: ({percentage.toFixed(2)}%)</p>
          <button className="quiz-button" onClick={handleTryAgain}>
            {" "}
            Try again Scholar!
          </button>
        </div>
      ) : questions.length > 0 ? (
        <div>
          <p className="quiz-question">
            {decodeURIComponent(questions[currentQuestionIndex].question)}
          </p>
          <div className="quiz-buttons">
            {renderChoices(questions[currentQuestionIndex]).map(
              (choice, index) => (
                <button
                  className="quiz-button"
                  key={index}
                  onClick={() => handleChoiceSelect(choice)}
                >
                  {decodeURIComponent(choice)}
                </button>
              )
            )}
          </div>
          <button className="quiz-button" onClick={handleNextQuestion}>
            Next Question
          </button>
        </div>
      ) : (
        <button className="quiz-button" onClick={fetchQuestions}>
          Start Quiz
        </button>
      )}
    </div>
  );
};

export default Quiz;

////<img src="https://image.shutterstock.com/image-vector/emoticons-icon-text-260nw-1010447296.jpg" />
