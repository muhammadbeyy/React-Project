import React from "react";
import { Link } from "react-router-dom";
//import Loading from "./Components/Loading";
import Footer from "../Components/Footer";
import Names from "../Pages/Names";

const Home = () => {
  return (
    <>
      <header className="img-container">
        <div className="img-home">
          <img src="https://dailytrust.com/wp-content/uploads/2019/09/US-government-sues-Detroit-suburb-over-mosque-rejection.jpg" />
        </div>
      </header>
      <article className="section-home">
        <h4>
          Islam, <span className="section-span-home">My Choice,</span> My Life.
        </h4>
        <Names />
      </article>
      <article className="section-home">
        <button className="button">
          <Link to="/SearchQuran" className="link-button">
            Explore the Qur'an
          </Link>
        </button>
      </article>

      <Footer />
    </>
  );
};

export default Home;
