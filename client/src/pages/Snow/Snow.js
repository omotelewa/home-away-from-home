import React from "react";
import "./Snow.css";
import ReservationForm from "../../components/Forms/registration-form";

const Snow = () => (
  <div className="snowDiv">
    <div className="container">
      <h1 className="header">Snowy Mountain</h1>
      <p>
      THE TANDI CABIN is a luxury mountain getaway with 4400-square-feet and is located about 15 minutes from Park City. The cabin is situated on a beautiful mountainside, surrounded by aspens. The open floor plan & large bedrooms allow everyone to spend time together and spread out for privacy. The cabin was constructed in 2008 and has top of the line amenities. Four wheel drive or all wheel drive vehicles are needed during the winter. Ask about RESERVING the TANDI & SILVERCREST Cabins for your large family reunion. These gorgeous cabins are on adjoining properties and can accommodate UP TO 65 GUESTS!!!
      </p>
    </div>
    <ReservationForm />
  </div>
);

export default Snow;
