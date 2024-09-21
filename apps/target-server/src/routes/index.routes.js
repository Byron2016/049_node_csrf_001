import { Router } from 'express';
import { login } from '../middleware/login.middleware.js';

const router = Router();

// Routes
router.get('/', (req, res) => {
  const logout = req.session.userId ? true : false;
  res.render('welcome', { login: !logout, logout });
});

router.get('/home', login, (req, res) => {
  // res.send(
  //   `home page, must be logged in to access! (userId: ${req.session.userId})`,
  // );
  res.render('home', { userId: req.session.userId });
});

export default router;
