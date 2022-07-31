import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import nunjucks from 'nunjucks';
import indexRoute from './routes/index.route.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;
const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'static')));

app.set('views', path.resolve(__dirname, 'views'));
nunjucks.configure('views', {
  express: app,
  noCache: true
});
app.set('view engine', 'njk');

app.use('/', indexRoute);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error('Not found');

  next(error);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  // err.status - нет, сейчас всегда статус 500
  // статус добавляет пакет http-errors (кт не используется сейчас для генерации ошибок)
  // можно добавить его вручную
  // e.status = 404;

  // render the error page
  res.render('error.njk', { error: err });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
