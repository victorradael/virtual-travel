import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "../styles/pages/landing.css";

import logoImg from "../images/logo.svg";

const Landing = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} className="logo" alt="Happy" />

        <main>
          <h1>Viaje para onde quiser.</h1>
          <p>Visite qualquer lugar do mundo com um clique.</p>
        </main>

        <div className="location">
          <strong>Ouro Branco</strong>
          <span>Minas Gerais</span>
        </div>

        <Link to="/app">
          <FiArrowRight size={26} className="enter-app" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
