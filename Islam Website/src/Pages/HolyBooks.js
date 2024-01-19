import React from "react";
import { Link } from "react-router-dom";

const HolyBooks = () => {
  return (
    <>
      <header className="img-container">
        <div className="img-home">
          <img src="https://img.freepik.com/free-photo/free-photo-ramadan-kareem-eid-mubarak-royal-elegant-lamp-with-mosque-holy-gate-with-fireworks_1340-23603.jpg?size=626&ext=jpg&ga=GA1.2.811533436.1696878738&semt=ais" />
        </div>
      </header>
      <section className="section">
        <h1 className="section-title">The Holy-Books</h1>

        <h2 className="section-HolyBooks">ٱلۡقُرۡءَانُ (The Holy-Qurʾān)</h2>
        <p className="section-info">
          The Quran is the central religious text of Islam and is considered the
          direct word of God as revealed to the Prophet Muhammad (PBUH) over a
          period of approximately 23 years. It is written in Arabic and is
          revered as the ultimate source of guidance, containing teachings,
          laws, and stories that shape the lives of Muslims.
        </p>
        <h2 className="section-HolyBooks"> التوراة(At-Tawrah)</h2>
        <p className="section-info">
          The Tawrah,also known as the Pentateuch, is the first part of the
          Hebrew Bible and is recognized as a holy book in Islam. It is believed
          to have been revealed to the Prophet Musa (AS) and contains the laws,
          commandments, and narratives that form the basis of Judaism. The
          Psalms
        </p>
        <h2 className="section-HolyBooks"> الزبور(Az-Zabur)</h2>
        <p className="section-info">
          The Psalms, or Zabur in Arabic, is another holy book mentioned in
          Islam. It is associated with the Prophet Dawud (AS) and is believed to
          be a collection of poetic prayers and hymns. The Psalms emphasize the
          importance of praising and glorifying God and are often recited for
          spiritual reflection.
        </p>
        <h2 className="section-HolyBooks"> الإنجيل(Al-Injil)</h2>
        <p className="section-info">
          The Gospel,referred to as the Injil in Arabic, is the holy book
          associated with the teachings of Jesus Christ (AS). Muslims believe
          that the original Injil was revealed to Jesus and contained divine
          guidance and teachings. However, the current versions of the Gospels
          in circulation are considered to have undergone alterations and are
          not considered authentic by Muslims.
        </p>
        <h2 className="section-HolyBooks">الصحوف (Suhuf Ibrahim)</h2>
        <p className="section-info">
          The Scrolls of Ibrahim, also known as the Suhuf Ibrahim, are mentioned
          in Islamic texts as a holy book revealed to the Prophet Abraham
          (PBUH). These scrolls are believed to contain teachings and guidance
          related to monotheism and the worship of God.
        </p>
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

export default HolyBooks;
