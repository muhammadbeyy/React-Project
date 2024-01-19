import React from "react";
import "./styles.css";

//MY components
import Navbar from "./Navbar";
import Main from "./Main";
import Quiz from "./Quiz";

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Quiz />
    </>
  );
}
