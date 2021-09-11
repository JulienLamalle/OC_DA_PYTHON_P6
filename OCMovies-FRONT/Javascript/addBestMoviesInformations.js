import { getData } from "./fetchData.js";
import { calculateStarsToColor } from "./utils/utils.js";

export const addBestMovieInformations = async (
  bestMovieSection,
  bestMovieSectionTitle,
  bestMovieSectionResume,
  bestMovieSectionYear,
  bestMovieSectionStars
) => {
  const data = await getData("?sort_by=-imdb_score");
  const complementaryBestMovieInformations = await getData(
    "/" + data.results[0].id
  );
  bestMovieSection.style.background += `url(${complementaryBestMovieInformations.image_url}) no-repeat center center/cover`;
  bestMovieSectionTitle.innerHTML = `${complementaryBestMovieInformations.title}`;
  bestMovieSectionResume.innerHTML = `${complementaryBestMovieInformations.description}`;
  bestMovieSectionYear.innerHTML = `${complementaryBestMovieInformations.year}`;
  const numberOfStarsToColor = calculateStarsToColor(
    complementaryBestMovieInformations.imdb_score
  );
  for (let i = 0; i < numberOfStarsToColor; i++) {
    bestMovieSectionStars[i].classList.add("checked");
  }
};
