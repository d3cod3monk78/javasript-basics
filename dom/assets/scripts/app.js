const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieModalButton = document.querySelector('.modal__actions .btn--passive');
const confirmAddMovieModalButton = cancelAddMovieModalButton.nextElementSibling;
const userInputs = document.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');


const movies = [];

const updateUI = () => {
	if (movies.length === 0) {
		entryTextSection.style.display = 'block'
	}
	else {
		entryTextSection.style.display = 'none'
	}
}

const renderNewMovieElement = (title, imageUrl, rating) => {
	const newMovieElement = document.createElement('li');
	newMovieElement.className = 'movie-element';
	newMovieElement.innerHTML = `
		<div class='movie-element__image'>
			<img src=${imageUrl} alt=${title}/>
		</div>
		<div class='movie-element__info'>
			<h2>${title}</h2>
			<p>${rating}/5 stars</p>
		</div>
	`;
	const listRoot = document.getElementById('movie-list');
	listRoot.append(newMovieElement);
}

const toggleBackdrop = () => {
	backdrop.classList.toggle('visible');
}

const backdropClickHandler = () => {
	toggleMovieModal();
}

const toggleMovieModal = () => {
	addMovieModal.classList.toggle('visible');
	toggleBackdrop();
}

const cancelAddMovieModal = () => {
	toggleMovieModal();
}

const clearUserInputs = () => {
	for (const userInput of userInputs) {
		userInput.value = '';
	}
}

const addMovieHandler = () => {
	const titleValue = userInputs[0].value;
	const imageUrl = userInputs[1].value;
	const userRating = userInputs[2].value;

	if (titleValue.trim() == '' || imageUrl.trim() == '' || userRating.trim() == '' || +userRating < 1 || +userRating > 5) {
		alert('Please enter valid data');
		return;
	}

	const newMovie = {
		title: titleValue,
		imageUrl: imageUrl,
		rating: userRating
	}

	movies.push(newMovie);
	clearUserInputs();
	toggleMovieModal();
	renderNewMovieElement(newMovie.title, newMovie.imageUrl, newMovie.rating);
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler)
cancelAddMovieModalButton.addEventListener('click', cancelAddMovieModal);
confirmAddMovieModalButton.addEventListener('click', addMovieHandler)