import { Router } from 'express';

import {
  renderLoginForm,
  processLoginForm,
} from '../controllers/login.controllers.js';

const router = Router();

// Routes
router.get('/login', renderLoginForm);

router.post('/login', processLoginForm);

export default router;
