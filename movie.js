const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const searchBar = document.getElementById("searchBar");
const movieListItems = document.querySelectorAll(".movie-list-item");

searchBar.addEventListener("input", () => {
    const searchValue = searchBar.value.toLowerCase().trim();

    movieLists.forEach(movieList => {
        const movies = movieList.querySelectorAll(".movie-list-item");

        movies.forEach(movie => {
            const title = movie.querySelector(".movie-list-item-title").textContent.toLowerCase();
            if (title.includes(searchValue)) {
                movie.style.display = "block";
            } else {
                movie.style.display = "none";
            }
        });

        const firstMatchedMovie = movieList.querySelector(".movie-list-item[style='display: block;']");
        if (firstMatchedMovie) {
            movieList.prepend(firstMatchedMovie);
        }
    });
});

arrows.forEach((arrow, i)=>{
    const itemNum = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        const ratio = Math.floor(window.innerWidth / 310);
        clickCounter++;
        if(itemNum - (4 + clickCounter)+ (4 - ratio) >= 0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
                - 340}px)`;
        }else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle, .logo");
ball.addEventListener("click", ()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active");
});


