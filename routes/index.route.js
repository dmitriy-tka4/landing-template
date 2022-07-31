import { Router } from 'express';

import * as indexController from '../controllers/index.controller.js';
import * as feedbackController from '../controllers/feedback.controller.js';

const router = Router();

// main page
router.get('/', indexController.showMainPage);

// form
router.post('/send', feedbackController.send);

export default router;
