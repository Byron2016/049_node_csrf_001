import * as fs from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Db
const users = JSON.parse(fs.readFileSync(join(__dirname, '..', 'db.json')));
console.log(users);

export const renderLoginForm = (req, res) => {
  res.render('login');
};

export const processLoginForm = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send('All fields are requiered');
  }
  const user = users.find((user) => user.email === req.body.email);
  if (!user || user.password !== req.body.password) {
    return res.status(400).send('Invalid Credentials');
  }
  req.session.test = 'hola';
  req.session.userId = user.id;
  console.log(req.session);
  res.redirect('/home');
};

export const loginEditForm = (req, res) => {
  res.render('edit');
};

export const processLoginEditForm = (req, res) => {
  const user = users.find((user) => user.id === req.session.userId);
  user.email = req.body.email;
  console.log(`User ${user.id} email changed to ${user.email}`);
  res.send('Email changed');
};
