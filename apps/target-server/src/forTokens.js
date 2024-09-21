// CSRF
import { v4 as uuidv4 } from 'uuid';

export const tokens = new Map();

export const csrfToken = (sessionId) => {
  const token = uuidv4();
  tokens.get(sessionId).add(token);
  //const now = new Date().getTime(); //1.01.35
  setTimeout(() => {
    tokens.get(sessionId).delete(token);
    console.log('csrfToken-Token-Eliminado', tokens);
  }, 30000);
  console.log('csrfToken-Token-Agregado', tokens);
  return token;
};

export const crsf = (req, res, next) => {
  const token = req.body.csrf;
  console.log('crsf-token', token);
  console.log('crsf-tokens', tokens);
  if (!token || !tokens.get(req.sessionID).has(token)) {
    res.status(422).send('CSRF Token missing or expired');
  } else {
    next();
  }
};
