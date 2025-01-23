import fetch from "node-fetch";

const API = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export async function loadMovies() {
  const res = await fetch(API + '/movies');
  const payload = await res.json();
  console.log(payload.data);
  return payload.data;

}

export async function loadMovie(id) {
  const res = await fetch(API + '/movies/' + id);
  const payload = await res.json();
  return payload.data;
}
