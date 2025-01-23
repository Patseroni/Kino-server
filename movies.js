import fetch from "node-fetch";

const API = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export async function loadMovies() {
  const res = await fetch(API + '/movies');
  const movies = await res.json();
  console.log(movies.data);
  return movies.data;

}

export async function loadMovie(id) {
  const res = await fetch(API + '/movies/' + id);
  const movies = await res.json();
  return movies.data;
}
