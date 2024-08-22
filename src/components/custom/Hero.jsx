import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="fex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]">Discover Your Next ADventure with AI:</span>Personalised
        Itineraries at Your FingerTips
      </h1>
      <p className="text-xl text-gray-500 text-center">Your personal trip planner and travel curator, creating custom itineraies tailored to your interests and budget</p>
      <Link to={'/create-trip'}><Button>Get Started,its Free</Button></Link>
    </div>
  );
}

export default Hero;
