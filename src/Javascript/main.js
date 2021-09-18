import { addContentToCarousel } from "./addContentToCarousel.js";
import { addBestMovieInformations } from "./addBestMoviesInformations.js";

const bestMovieSection = document.querySelector(".showcase");
const bestMovieSectionTitle = document.querySelector(".bestmovie-title");
const bestMovieSectionResume = document.querySelector(".bestmovie-resume");
const bestMovieSectionYear = document.querySelector(".bestmovie-year");
const bestMovieSectionStars = document.querySelectorAll(".fa-star");

// top rated carousel constants

const firstSectionTopRated = document.querySelector("#section1");
const secondSectionTopRated = document.querySelector("#section2");

// top rated CRIME movies carousel constants

const firstSectionCrimeMovies = document.querySelector("#section3");
const secondSectionCrimeMovies = document.querySelector("#section4");

// top rated Fantasy movies carousel constants

const firstSectionFantasyMovies = document.querySelector("#section5");
const secondSectionFantasyMovies = document.querySelector("#section6");

// top rated Animation movies carousel constants

const firstSectionAnimationMovies = document.querySelector("#section7");
const secondSectionAnimationMovies = document.querySelector("#section8");

addBestMovieInformations(
  bestMovieSection,
  bestMovieSectionTitle,
  bestMovieSectionResume,
  bestMovieSectionYear,
  bestMovieSectionStars
);

addContentToCarousel(
  "?imdb_score_min=9.4",
  "?imdb_score_min=9.4&page=2",
  firstSectionTopRated,
  secondSectionTopRated
);

addContentToCarousel(
  "?sort_by=-imdb_score&genre=crime",
  "?sort_by=-imdb_score&genre=crime&page=2",
  firstSectionCrimeMovies,
  secondSectionCrimeMovies
);

addContentToCarousel(
  "?sort_by=-imdb_score&genre=fantasy",
  "?sort_by=-imdb_score&genre=fantasy&page=2",
  firstSectionFantasyMovies,
  secondSectionFantasyMovies
);

addContentToCarousel(
  "?sort_by=-imdb_score&genre=animation",
  "?sort_by=-imdb_score&genre=animation&page=2",
  firstSectionAnimationMovies,
  secondSectionAnimationMovies
);