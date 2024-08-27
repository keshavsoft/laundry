import express from 'express';
var router = express.Router();

import { GetIdWithTableFunc, GetHomeFunc } from '../../controllers/getFuncs/EntryFile.js';

router.get('', GetHomeFunc);
router.get('/Table/:inTable/:id', GetIdWithTableFunc);

export { router };

