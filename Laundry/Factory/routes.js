import express from 'express';

var router = express.Router();

import { router as routerFromInwards } from './Inwards/routes.js';
import { router as routerFromWashing } from './Washing/routes.js';
import { router as routerFromCompletion } from './Completion/routes.js';

router.use('/Inwards', routerFromInwards);
router.use('/Washing', routerFromWashing);
router.use('/Completion', routerFromCompletion);

export { router };