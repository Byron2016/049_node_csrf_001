import { Router } from 'express';

import {
  renderLoginForm,
  processLoginForm,
  loginEditForm,
  processLoginEditForm,
  processLogOut,
} from '../controllers/login.controllers.js';
import { login } from '../middleware/login.middleware.js';
import { crsf } from '../forTokens.js';

const router = Router();

// Routes
router.get('/login', renderLoginForm);

router.post('/login', processLoginForm);

router.get('/login/logout', login, processLogOut);

router.get('/login/edit', login, loginEditForm);

router.post('/login/edit', login, crsf, processLoginEditForm);

export default router;
