let moviesAndDetails = movies
	.map((movie) => movieDetails.find((detail) => movie.title === detail.title))
	.filter((movie) => movie !== undefined);

const movieList = document.querySelector('ul');

let cast;
let year;

const renderMovies = (listOfMovies) => {
	movieList.innerHTML = '';
	for (const movie of listOfMovies) {
		const movieItem = document.createElement('li');
		movies.forEach((film) => {
			if (film.title === movie.title) {
				cast = film.cast;
				year = film.year;
			}
		});
		movieItem.innerHTML = `<img src="${movie.imageUrl}"/>
    <h3>${movie.title}</h3>
    <p>${cast}</p>
    ${year}  
    `;
		movieItem.classList.add('movie');
		movieList.append(movieItem);
	}
};

renderMovies(moviesAndDetails);

const titleInput = document.querySelector('#title');
const actorInput = document.querySelector('#actor');
const searchBtn = document.querySelector('button');

const search = (e) => {
	e.preventDefault();
	const matchingMovieList = moviesAndDetails.filter((movie) => {
		movies.forEach((film) => {
			if (film.title === movie.title) {
				cast = film.cast;
			}
		});
		return (
			movie.title.toLowerCase().includes(titleInput.value.toLowerCase()) &&
			cast.toString().toLowerCase().includes(actorInput.value.toLowerCase())
			);
		});
	renderMovies(matchingMovieList);
};

searchBtn.addEventListener('click', search);

const pageTitle = document.querySelector('h1');
pageTitle.addEventListener('click', () => {
	location.reload();
});