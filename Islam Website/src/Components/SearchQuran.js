import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

export default function SearchQuran() {
  const { surahNumber, setSurahNumber, surahData, setSurahData } =
    useGlobalContext();

  const fetchSurahData = async () => {
    try {
      const response = await fetch(
        `https://api.alquran.cloud/v1/surah/${surahNumber}`
      );
      const data = await response.json();
      setSurahData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSurahChange = (event) => {
    setSurahNumber(event.target.value);
  };

  const handleFetchData = () => {
    fetchSurahData();
  };

  return (
    <>
      <section>
        <h1 className="section-title">Al-Qur'an</h1>

        <label className="section-label">
          <span className="section-label-span">Enter Surah Chapter:</span>
          <input
            className="section-label-input"
            type="number"
            value={surahNumber}
            onChange={handleSurahChange}
          ></input>
        </label>

        <button className="button" onClick={handleFetchData}>
          Fetch Surah
        </button>

        {surahData && (
          <div>
            <h2 className="section-title">{surahData.name}</h2>
            <p className="section-title-header">
              {surahData.englishName} - {surahData.englishNameTranslation}
            </p>
            <p className="section-title-subheader">
              Revealed :{surahData.revelationType} - Number of Ayahs :
              {surahData.numberOfAyahs}
            </p>
            <div className="section-info-data">
              {surahData.ayahs.map((ayah, index) => (
                <div className="section-ayah-container" key={ayah.number}>
                  <p className="section-info-text">{ayah.text}</p>
                  <p className="section-info-number">{`${index + 1}`}</p>
                </div>
              ))}
            </div>
          </div>
        )}
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
}
