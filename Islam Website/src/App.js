import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";

//Import Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import HolyBooks from "./Pages/HolyBooks";
import Rasul from "./Pages/Rasul";
import Months from "./Pages/Months";
import Names from "./Pages/Names";

//Import Components
import Navbar from "./Components/Navbar";
import SearchQuran from "./Components/SearchQuran";
//import Loading from "./Components/Loading";
//import Footer from "./Components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Months" element={<Months />} />
        <Route path="Rasul" element={<Rasul />} />
        <Route path="HolyBooks" element={<HolyBooks />} />
        <Route path="Names" element={<Names />} />
        <Route path="SearchQuran" element={<SearchQuran />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
