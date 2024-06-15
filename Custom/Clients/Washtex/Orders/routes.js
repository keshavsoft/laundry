import express from 'express';

var router = express.Router();

import { router as routerFromNewOrder } from './NewOrder/routes.js';
import { router as routerFromToday } from './Today/routes.js';

router.use('/NewOrder', routerFromNewOrder);
router.use('/Today', routerFromToday);

export { router };