import express from 'express';
var router = express.Router();

import { GetIdWithTableFunc, GetHomeFunc } from '../../controllers/getFuncs/EntryFile.js';

router.get('/Home', GetHomeFunc);
router.get('/Table/:inTable/:id', GetIdWithTableFunc);

export { router };

