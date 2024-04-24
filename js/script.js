"use strict";

// const slidesEL = [
//   {
//     image: "slide1.jpg",
//     tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
//   },
//   {
//     image: "slide2.jpg",
//     tagLine:
//       "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
//   },
//   {
//     image: "slide3.jpg",
//     tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
//   },
//   {
//     image: "slide4.png",
//     tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
//   },
// ];

// Image SLIDER

const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

const initializeSlider = () => {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
};

const showSlide = (index) => {
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
};
const prevSlide = () => {};
const nextSlide = () => {
  slideIndex++;
  showSlide(slideIndex);
};

const carousel = document.querySelector(".dots");
