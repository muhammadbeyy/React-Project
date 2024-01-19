import React from "react";

const Main = () => {
  return (
    <>
      <h4 className="main-intro">
        Test your knowledge by taking this amazing quiz challenge{" "}
      </h4>
      <article className="image-container">
        <img
          className="image"
          src="https://img.freepik.com/free-photo/vertical-shot-contemplative-thoughtful-dark-skinned-man-keeps-hand-chin-looks-thoughtfully-upwards_273609-23820.jpg?size=626&ext=jpg&ga=GA1.1.811533436.1696878738&semt=sph"
          alt="quiz-image"
        />
      </article>
      <section>
        <h2> Instructions :</h2>
        <p> Select the right option of the four choices</p>
        <p style={{ fontWeight: "bold" }}>
          You have 20 seconds for each question!
        </p>
      </section>
    </>
  );
};

export default Main;
