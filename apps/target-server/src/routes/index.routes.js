import { Router } from 'express';

const router = Router();

// Routes
router.get('/home', (req, res) => {
  res.send('home');
});

export default router;
