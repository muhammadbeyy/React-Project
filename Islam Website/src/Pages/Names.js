import React from "react";
import Data from "../Components/Data";
import { Link } from "react-router-dom";

const names = () => {
  const [names, setNames] = React.useState(null);
  console.log(names);

  const generateNames = () => {
    const randomIndex = Math.floor(Math.random() * Data.length);
    const names = Data[randomIndex];
    setNames(names);
  };

  return (
    <>
      <section className="section about-section">
        <div>
          <h1 className="section-title">
            99<span className="section-span-names"> Names of ٱللَّٰه</span> (Al
            Asma Ul Husna)
          </h1>
          <article className="article-home">
            <p>
              Allah says in the Quran:And to Allah belong the best names, so
              invoke Him by them.. (Quran 7:180)
            </p>
            <p>
              Allah – there is no deity except Him. To Him belong the best
              names.
            </p>
            <p>
              (Quran 20:8) He is Allah, the Creator, the Inventor, the
              Fashioner; to Him belong the best names. (Quran 59:24)
            </p>
          </article>
          <button className="button" onClick={generateNames}>
            Generate Random beautiful name
          </button>
          {names && (
            <>
              <h2 className="section-name-header">Asma ul Husna:</h2>
              <h4 className="section-span">{`Arabic: ${names.arabic} `}</h4>
              <h5 className="section-span">{`English: ${names.english} `}</h5>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default names;
