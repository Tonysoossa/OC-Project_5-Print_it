"use strict";
const textSlider = document.getElementById("text-slider");

const slidesText = [
  "Impressions tous formats <span>en boutique et en ligne</span>",
  "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  "Autocollants <span>avec découpe laser sur mesure</span>",
];

// Image SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;

const dots = document.querySelectorAll(".dot");
dots[slideIndex].classList.add("dot_selected");

const initializeSlider = () => {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
  }
};

document.addEventListener("DOMContentLoaded", initializeSlider);

const showSlide = (index) => {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");

  dots.forEach((slide) => {
    slide.classList.remove("dot_selected");
  });
  dots[slideIndex].classList.add("dot_selected");
  textSlider.innerHTML = slidesText[slideIndex];
};

const prevSlide = () => {
  slideIndex--;
  showSlide(slideIndex);
};
const nextSlide = () => {
  slideIndex++;
  showSlide(slideIndex);
};
