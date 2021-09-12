import { getData } from "./fetchData.js";

export const searchForItems = () => {
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];
  const items = document.querySelectorAll(".item");

  return { modal, items, span };
};

export const displayModal = (modal, items, span) => {
  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      modal.setAttribute(`data-id`, `${item.getAttribute("data-id")}`);
      modal.style.display = "block";
      addMovieInformationsToModal(modal.getAttribute("data-id"));
    });
  });

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      modal.getElementsByClassName(
        "modal-content"
      )[0].innerHTML = ` <span class="close">&times;</span>`;
    }
  };
};

const getMovieData = (movieId) => {
  return getData(`/${movieId}`);
};

const addMovieInformationsToModal = async (movieId) => {
  const movieInformations = await getMovieData(movieId);
  console.log(movieInformations);
  const modalContent = document.querySelector(".modal-content");
  modalContent.innerHTML += `
  <div class="image-place">
    <img src=${movieInformations.image_url} alt="Movie picture for ${
    movieInformations.title
  }" />
  </div>
  <div class="movie-informations">
    <div class="movie-title">
      <p>${movieInformations.title}</p>
    </div>
    <div class="movie-genre">
      <p class="introduction-text">Genre :</p>
      ${movieInformations.genres.map(
        (genre) => `<p class="movie-paragraph">${genre}</p>`
      )}
    </div>
    <div class="movie-date">
      <p class="introduction-text">Date de sortie :</p>
      <p class="movie-paragraph">${movieInformations.year}</p>
    </div>
    <div class="movie-score">
      <p class="introduction-text">Imdb score :</p>
      <p class="movie-paragraph">${movieInformations.imdb_score} / 10 </p>
    </div>
    <div class="movie-rated">
      <p class="introduction-text">Rated :</p>
      <p class="movie-paragraph">${movieInformations.rated} </p>
    </div>
    <div class="movie-realisator">
      <p class="introduction-text">Réalisateur :</p>
      <p class="movie-paragraph">${movieInformations.directors} </p>
    </div>
    <div class="movie-actors">
      <p class="introduction-text">Acteurs :</p>
      ${movieInformations.actors.map(
        (actor) => `<p class="movie-paragraph">${actor}</p>`
      )}
    </div>
    <div class="movie-duration">
      <p class="introduction-text">Durée :</p>
      <p class="movie-paragraph">${movieInformations.duration} </p>
    </div>
    <div class="movie-countries">
      <p class="introduction-text">Pays :</p>
      ${movieInformations.countries.map(
        (country) => `<p class="movie-paragraph">${country}</p>`
      )}
    </div>
    <div class="movie-critics">
      <p class="introduction-text">Résultat au box-office :</p>
      <p class="movie-paragraph">${
        movieInformations.reviews_from_critics !== null
          ? movieInformations.reviews_from_critics
          : "Ce film n'a pas reçu de résultat au box-office"
      } </p>
    </div>
    <div class="movie-description">
      <p class="introduction-text">Description :</p>
      <p class="movie-paragraph">${movieInformations.description} </p>
    </div>
  </div>
  `;
};
