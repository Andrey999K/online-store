import { Link } from "react-router-dom";
import React from "react";

interface LogoProps {
  image?: string;
}

export const Logo: React.FC<LogoProps> = ({ image }) => {
  return (
    <Link to="/">
      {image ? (
        <img src={`../../img/${image}`} alt="Logo" />
      ) : (
        <div className="text-3xl lg:text-5xl font-extrabold">
          <span>L</span>
          <span>o</span>
          <span className="text-sky-500">g</span>
          <span className="text-sky-500">o</span>
        </div>
      )}
    </Link>
  );
};
