import express from 'express';
import session from 'express-session';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import handlebars from 'express-handlebars';

import indexRoutes from './routes/index.routes.js';
import loginRoutes from './routes/login.routes.js';

// import cors from 'cors';
import flash from 'connect-flash-plus'; // En la sessión metio un mensaje o lo que sea, esto sirve solo para una petición, la próxima ya no existe.

// Initializations
const app = express();
const PORT = process.env.PORT || 3333;
const __dirname = dirname(fileURLToPath(import.meta.url));

// settings
app.set('port', PORT);
app.set('views', join(__dirname, 'views'));

// config view engine
const hbs = handlebars.create({
  defaultLayout: 'main',
  layoutsDir: join(app.get('views'), 'layouts'),
  partialsDir: join(app.get('views'), 'partials'),
  extname: '.hbs',
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// Middlewares
// app.use(
//   cors({
//     origin: 'http://localhost:5555',
//     credentials: true,
//   }),
// );
app.use(express.urlencoded({ extended: true })); // mirar T_express.md
app.use(
  session({
    secret: 'test',
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(flash());

// Db
// const users = JSON.parse(fs.readFileSync(join(__dirname, 'db.json')));
// console.log(users);

// Routes
app.use(indexRoutes);
app.use(loginRoutes);

// Server
app.listen(app.get('port'), () => console.log(`Listen on port ${PORT}`));
