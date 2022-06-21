"use strict"

const elMovieList = document.querySelector(".movie__list");
const elResult = document.querySelector(".movie__result-num");
const elSelect = document.querySelector(".genres__select");
const elForm = document.querySelector(".form");
const elBookmarkList = document.querySelector(".bookmark-list");

const bookmarks = [];

elBookmarkList.addEventListener("click", function(e) {
  if(e.target.matches(".bookmark-delete-btn")){
    const bookmarkDeleteId = e.target.dataset.bookmarkDeleteId
    const foundBookmarkIndex = bookmarks.findIndex((bookmark) => bookmark.id === bookmarkDeleteId);

    bookmarks.splice(foundBookmarkIndex, 1);

    elBookmarkList.innerHTML = null;

    renderBookmarks(bookmarks, elBookmarkList)
  }
})

const renderBookmarks = function(arr, htmlElement){
  arr.forEach(bookmark => {
  const newItem = document.createElement("li");
  const newDeleteBtn = document.createElement("button");

  newDeleteBtn.dataset.bookmarkDeleteId = bookmark.id

  newDeleteBtn.setAttribute("class", "bookmark-delete-btn btn btn-danger", )
  newDeleteBtn.textContent = "button"

  newItem.textContent = bookmark.title
  htmlElement.appendChild(newItem);
  newItem.appendChild(newDeleteBtn)
  })
}

elMovieList.addEventListener("click", function(e){
    if(e.target.matches(".bookmark-btn")){
        const bookmarkId = e.target.dataset.bookmarkBtnId;
        const foundBookmark = films.find(film => film.id === bookmarkId)
        bookmarks.push(foundBookmark);

        elBookmarkList.innerHTML = null

        renderBookmarks(bookmarks, elBookmarkList)
      }
})

elResult.textContent = films.length;

const renderGenres = function (arr) {
  const uniqueGenres = [];

  arr.forEach((film) => {
    film.genres.forEach((genre) => {
      if (!uniqueGenres.includes(genre)) {
        uniqueGenres.push(genre);
      }
    });
  });

  uniqueGenres.forEach((genre) => {
    const genresOption = document.createElement("option");

    genresOption.textContent = genre;
    genresOption.value = genre;

    elSelect.appendChild(genresOption);
  });
};

const renderMovies = function (arr, htmlElement) {
  arr.forEach((movie) => {
    //CREATE ELEMENT
    const newLi = document.createElement("li");
    const newImg = document.createElement("img");
    const newDiv = document.createElement("div");
    const newTitle = document.createElement("h5");
    const newLanguage = document.createElement("p");
    const newYear = document.createElement("p");
    const bookmarkBtn = document.createElement("button");

    //SET ATTRIBUTE
    newLi.setAttribute("class", "card mb-3");
    newLi.style.width = "18rem";
    newImg.classList.add("card-img-top");
    newImg.setAttribute("src", movie.poster);
    newDiv.classList.add("card-body");
    newTitle.classList.add("card-title");
    newLanguage.classList.add("card-text");
    newYear.classList.add("card-text");
    bookmarkBtn.setAttribute("class", "btn btn-outline-primary mt-2");
    bookmarkBtn.classList.add("bookmark-btn")
    // TEXT CONTENT:
    newTitle.textContent = movie.title;
    newYear.textContent = movie.year;
    bookmarkBtn.textContent = "bookmark"

    // DATASET:


    bookmarkBtn.dataset.bookmarkBtnId = movie.id;

    const genresList = document.createElement("ul");

    movie.genres.forEach((genre) => {
      const genreItem = document.createElement("li");

      genreItem.textContent = genre;

      genresList.appendChild(genreItem);
    });

    //APPEND
    htmlElement.appendChild(newLi);
    newLi.appendChild(newImg);
    newLi.appendChild(newDiv);
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newYear);
    newDiv.appendChild(genresList);
    newDiv.appendChild(bookmarkBtn);
});
};

renderMovies(films, elMovieList);
renderGenres(films);
