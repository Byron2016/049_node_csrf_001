import { Router } from 'express';

const router = Router();

// Routes
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

export default router;
