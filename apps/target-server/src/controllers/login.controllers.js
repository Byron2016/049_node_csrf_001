import * as fs from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { csrfToken, tokens } from '../forTokens.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Db
const users = JSON.parse(fs.readFileSync(join(__dirname, '..', 'db.json')));
console.log(users);

export const renderLoginForm = (req, res) => {
  //res.render('login');
  console.log('En renderLoginForm');
  console.log('req.session-->: ', req.session);
  //res.render('login', { message: req.flash('mesage') });
  res.render('login', { message: req.flash('message') });
};

export const processLoginForm = (req, res) => {
  if (!req.body.email || !req.body.password) {
    //return res.status(400).send('All fields are requiered');
    req.flash('message', 'All fields are requiered');
    return res.redirect('/login');
  }
  const user = users.find((user) => user.email === req.body.email);
  if (!user || user.password !== req.body.password) {
    //return res.status(400).send('Invalid Credentials');
    req.flash('message', 'Invalid Credentials');
    return res.redirect('/login');
  }
  req.session.test = 'hola';
  req.session.userId = user.id;

  //CSRF tokens
  tokens.set(req.sessionID, new Set());
  //console.log('login-post-processLoginForm', tokens);

  console.log(req.session);
  res.redirect('/home');
};

export const processLogOut = (req, res) => {
  req.session.destroy();
  //res.send('Logged out');
  res.redirect('/');
};

export const loginEditForm = (req, res) => {
  const newToken = csrfToken(req.sessionID);
  res.render('edit', { token: newToken });
};

export const processLoginEditForm = (req, res) => {
  console.log(`----> Inside of  processLoginEditForm ${req.body}`);
  console.log(req.get('origin'));
  const user = users.find((user) => user.id === req.session.userId);
  user.email = req.body.email;
  console.log(`User ${user.id} email changed to ${user.email}`);
  res.send('Email changed');
};
