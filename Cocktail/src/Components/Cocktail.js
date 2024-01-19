import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, names, id, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={names} />
      </div>
      <div className="cocktail-footer">
        <h3>{names}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
