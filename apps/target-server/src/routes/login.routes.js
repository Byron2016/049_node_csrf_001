import { Router } from 'express';

import {
  renderLoginForm,
  processLoginForm,
  loginEditForm,
  processLoginEditForm,
} from '../controllers/login.controllers.js';

const router = Router();

// Routes
router.get('/login', renderLoginForm);

router.post('/login', processLoginForm);

router.get('/login/edit', loginEditForm);

router.post('/login/edit', processLoginEditForm);

export default router;
