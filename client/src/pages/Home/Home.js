import React from "react";
import "./Home.css";
import PropertyTable from "../../components/PropertyTable";

const Home = () => (
  <div className="homeDiv">
    <div className="container">
      <h1 className="header">Home Away From Home</h1>
      <p>Welcome!!! This ia a luxury resort rooms that are fascinating to stay.  We have several locations to fit every budget.  All you have to do is visit us and we will give you the details as to how to rent from or if you want to become a listing partner your will be welcome.  We have a lot to offer to our guests.  Staying in hotels are  sometimes boring and the kids feel trapped so, Home Away From Home will give you the perfect get away.  Our current long or short term stays are available below  Give us a try!
        
        
        <PropertyTable />
      </p>
    </div>
    <a href="/beach"><div className="top-image"></div></a>

    <div className="section white">
      <div className="container">
      <p>
        <h4 className="text-center">The Beach Challet Hilton Heads</h4>
        The perfect cozy beach house for your summer and spring accomodations.  What are you waiting for? The beach house has limited chalet for our renters and first time exprience vacationers at our spot.  Once you come to our beach houses there will be not turning back.  We have a two week advance booking policy so please hurry and secure your house.</p>
      </div>
    </div>
    <a href="/snow"><div className="bottom-image"></div></a>
    <div className="container">
    <p>
    <h4 className="text-center">The Snowy Mountaing Getaway</h4>
      THE Snowy is a luxury mountain getaway with 4400-square-feet and is located about 15 minutes from Park City. The cabin is situated on a beautiful mountainside, surrounded by aspens. The open floor plan & large bedrooms allow everyone to spend time together and spread out for privacy. The cabin was constructed in 2008 and has top of the line amenities. Four wheel drive or all wheel drive vehicles are needed during the winter. Ask about RESERVING the TANDI & SILVERCREST Cabins for your large family reunion. These gorgeous cabins are on adjoining properties and can accommodate UP TO 65 GUESTS!!!</p>
    </div>
  </div>

)

export default Home;