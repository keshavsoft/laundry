import express from 'express';

var router = express.Router();

import { router as routerFromQrcodes } from './Qrcodes/routes.js';
import { router as routerFromOrders } from './Orders/routes.js';
import { router as routerFromBranch } from './Branch/routes.js';

router.use('/Qrcodes', routerFromQrcodes);
router.use('/Orders', routerFromOrders);
router.use('/Branch', routerFromBranch);

export { router };