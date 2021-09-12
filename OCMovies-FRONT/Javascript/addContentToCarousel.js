import { getData } from "./fetchData.js";
import { displayModal, searchForItems } from "./modal.js";

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
      <div class="item" data-id=${movie.id}>
        <img src=${movie.image_url} alt="Movie picture for ${movie.title}" />
      </div>
    `;
    }
  });

  const secondPart = allTopRatedMovies.slice(3);

  secondPart.map((movie, index) => {
    if (index < 4) {
      secondSelectedSection.innerHTML += `
      <div class="item" data-id=${movie.id}>
        <img src=${movie.image_url} alt="Movie picture for ${movie.title}" />
      </div>
    `;
    }
  });
  const { modal, items, span } = searchForItems(); 
  displayModal(modal, items, span);
};
