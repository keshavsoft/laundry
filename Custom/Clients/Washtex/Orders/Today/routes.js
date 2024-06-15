import express from 'express';

var router = express.Router();

import { router as routerFromWithQrCode } from './WithQrCode/routes.js';

router.use('/WithQrCode', routerFromWithQrCode);

export { router };