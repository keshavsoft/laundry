import express from 'express';

var router = express.Router();

import { router as routerFromFactory } from './Factory/routes.js';

router.use('/Factory', routerFromFactory);

export { router };