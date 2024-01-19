import React from "react";
import { Link } from "react-router-dom";

const Months = () => {
  return (
    <>
      <header className="img-container">
        <div className="img-home">
          <img src="https://img.freepik.com/free-photo/picture-mosque-with-moon-background_1340-28718.jpg?size=626&ext=jpg&ga=GA1.2.811533436.1696878738&semt=ais" />
        </div>
      </header>
      <section className="section">
        <h1 className="section-title">the Islamic months</h1>
        <ul className="section-months">
          <li>Muharram – ٱلْمُحَرَّم - (Forbidden)</li>
          <li>Safar – صَفَر – (Void)</li>
          <li>Rabiul Awwal – رَبِيع ٱلْأَوَّل – (The First Spring)</li>
          <li>
            Rabi ul Akhir(Rabial Thani) – رَبِيع ٱلْآخِر – (The Second Spring)
          </li>
          <li>
            Jamada Awwal–جُمَادَىٰ ٱلْأُولَىٰ – (The First Of Parched Land)
          </li>
          <li>
            Jumada Al-Akhirah– جُمَادَىٰ ٱلْآخِرَة – (The Last Of Parched Land)
          </li>
          <li>Rajab – رَجَب –(Respect, Honour)</li>
          <li>Shaban – شَعْبَان – (Scattered)</li>
          <li>Ramadan – رَمَضَان – (Burning Heat)</li>
          <li>Shawwal – شَوَّال – (Raised)</li>
          <li>DhulQadah – ذُو ٱلْقَعْدَة – (The One Of Truce/Sitting)</li>
          <li>Dhul Hijjah –ذُوٱلْحِجَّة – (The One Of Pilgrimage)</li>
        </ul>
      </section>
      <button className="button">
        <Link
          className="link-button"
          to="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          back to the top
        </Link>
      </button>
    </>
  );
};

export default Months;
