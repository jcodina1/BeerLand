import React from "react";
import "./Slider2.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {

  return (
    <button
      onClick={moveSlide}
      className={direction === "next2" ? "btn-slide2 next" : "btn-slide2 prev"}
    >
      <img src={direction === "next2" ? rightArrow : leftArrow} />
    </button>
  );
}
