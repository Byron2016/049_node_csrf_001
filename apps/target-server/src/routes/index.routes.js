import { Router } from 'express';
import { login } from '../middleware/login.middleware.js';

const router = Router();

// Routes
router.get('/home', login, (req, res) => {
  res.send(
    `home page, must be logged in to access! (userId: ${req.session.userId})`,
  );
});

export default router;
