import { getData } from "./fetchData.js";

export const addContentToCarousel = async (
  firstContentPageUrl,
  secondContentPageUrl,
  firstSelectedSection,
  secondSelectedSection
) => {
  const topFiveMovies = await getData(firstContentPageUrl);
  const theNextTopMovies = await getData(secondContentPageUrl);
  const allTopRatedMovies = [
    ...topFiveMovies.results,
    ...theNextTopMovies.results,
  ];

  allTopRatedMovies.map((movie, index) => {
    if (index < 4) {
      firstSelectedSection.innerHTML += `
      <div class="item">
        <img src=${movie.image_url} alt="Movie picture" />
      </div>
    `;
    }
  });

  const secondPart = allTopRatedMovies.slice(3);

  secondPart.map((movie, index) => {
    if (index < 4) {
      secondSelectedSection.innerHTML += `
      <div class=${`item ${index}`}>
        <img src=${movie.image_url} alt="Movie picture" />
      </div>
    `;
    }
  });
};
