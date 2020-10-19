import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import mapMarker from "../images/map-marker.svg";
import "../styles/pages/orphanages-map.css";

const OphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} className="logo" alt="Happy Logo" />

          <h2>Digite as coordenadas</h2>
          <div className="input-field">
            <label htmlFor="latitude">Latitude:</label>
            <input id="latitude" type="text" />
          </div>
          <div className="input-field">
            <label htmlFor="longitude">Longitude:</label>
            <input id="longitude" type="text" />
          </div>

          <button className="travel">Viajar</button>
          <p>Muitos locais estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Ouro Branco</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <Map
        center={[-20.5206602, -43.7046644]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
      </Map>

      <Link to="" className="create-orphanage">
        <FiArrowLeft size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default OphanagesMap;
