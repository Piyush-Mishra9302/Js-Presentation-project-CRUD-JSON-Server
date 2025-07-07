
//Book on Call button code
let goToCallBooking = () => {
  location.href = "callBooking.html";
}


let allMovies = [];

async function fetchMovies() {
  const response = await fetch('movies_data.json');
  const data = await response.json();
  allMovies = data.movies;
  displayMovies(allMovies);
}

function displayMovies(movies) {
  const container = document.getElementById('movies-container');
  container.innerHTML = '';

  if (movies.length === 0) {
    container.innerHTML = `<p>No movies found for the selected filter.</p>`;
    return;
  }

  movies.forEach((movie,index) => {
    const card = document.createElement('div');
    card.className = 'movie-card';
     const mod = index % 4;
  if (mod === 0 || mod === 1) {
    card.setAttribute('data-aos', 'zoom-out-left');
  } else {
    card.setAttribute('data-aos', 'zoom-out-right');
  }

  card.setAttribute('data-aos-duration', '1000');
  card.innerHTML = `
  <img src="${movie.poster}" alt="${movie.title}" />
  <div class="movie-details">
    <h3>${movie.title}</h3>
    <p><strong>Language:</strong> ${movie.language}</p>
    <p><strong>Genre:</strong> ${movie.genre}</p>
    <p><strong>Rating:</strong> ${movie.rating}</p>
    <p>${movie.description}</p>
    <button class="book-now" onclick="bookNow('${movie.title}')">Book Now</button>
  </div>
`;

    container.appendChild(card);
  });
}

function filterByLang(language) {
  if (language === 'All') {
    displayMovies(allMovies);
  } else {
    const filtered = allMovies.filter(movie => movie.language === language);
    displayMovies(filtered);
  }
}

// Call fetch on page load
fetchMovies();


//Go to the booking page

function bookNow(title) {
  window.location.href = `booking.html?title=${encodeURIComponent(title)}`;
}

//Go to Dashboard page

let dashboard = () =>{
  window.location.href = "dashboard.html"
}
