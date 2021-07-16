import { getData } from "./fetchData.js";
import { calculateStarsToColor } from "./utils/utils.js";

const bestMovieSection = document.querySelector('.showcase');
const bestMovieSectionTitle = document.querySelector('.bestmovie-title');
const bestMovieSectionResume = document.querySelector('.bestmovie-resume');
const bestMovieSectionYear = document.querySelector('.bestmovie-year');
const bestMovieSectionStars = document.querySelectorAll('.fa-star');

const addBestMovieInformations = async () => {
  let data = await getData("?sort_by=-imdb_score");
  let complementaryBestMovieInformations = await getData("/" + data.results[0].id)
  bestMovieSection.style.background += `url(${complementaryBestMovieInformations.image_url}) no-repeat center center/cover`;
  bestMovieSectionTitle.innerHTML = `${complementaryBestMovieInformations.title}`
  bestMovieSectionResume.innerHTML = `${complementaryBestMovieInformations.description}`
  bestMovieSectionYear.innerHTML = `${complementaryBestMovieInformations.year}`
  let numberOfStarsToColor = calculateStarsToColor(complementaryBestMovieInformations.imdb_score)
  for (let i = 0; i < numberOfStarsToColor; i++) {
    bestMovieSectionStars[i].classList.add('checked')
  }
}

addBestMovieInformations()