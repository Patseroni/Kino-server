import express from 'express'
//import fs from 'fs/promises'
import { engine } from 'express-handlebars'
import { loadMovies } from './movies.js';
import { loadMovie } from './movies.js';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

async function renderPage(response, page){
  response.render(page);
  loadMovies();
}

app.get('/static', (request, response) => {
  renderPage(response, 'index');
});

app.use('/static', express.static('./static'));

app.listen(5080);












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