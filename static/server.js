
import express from 'express'
import fs from 'fs/promises'
/*
import { engine } from 'express-handlebars'

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.get('/index', async (response) => {

})
*/

const app = express();

app.use('/static', express.static('/static'))

app.get('/', async (request, response) => {
  const buf = await fs.readFile('./static/index.html')
  const html = buf.toString()
  response.send(html)
})


//test
app.get('/style.css', async (request, response) => {
  const buf = await fs.readFile('./static/style.css')
  const css = buf.toString()
  response.send(css)
})



//slut test


//app.use('/', express.static('./'));

app.listen(5080);



