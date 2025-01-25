import express from "express";
import { engine } from "express-handlebars";
import { loadMovie, loadMovies } from "./movies.js";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (req, res) => {
  const movies = await loadMovies();
  res.render("index", { movies });
});

app.get("/movies/:movieId", async (req, res) => {
  const movie = await loadMovie(req.params.movieId);
  res.render("movie", { movie });
});

app.use("/static", express.static("./static"));

export default app;












// =============================================================== //
/*
async function renderPage(response, page){
  response.render(page);
  
    const indexBuf = await fs.readFile(`./static/${page}.html`);
    const indexText = indexBuf.toString();
    
    const templateBuf = await fs.readFile('./templates/template.html');
    const templateText = templateBuf.toString();
  
    const output = templateText.replace('{{content}}', indexText);

    response.send(output)   
}
*/
// =============================================================== //