import express from 'express';
var router = express.Router();

import { GetIdWithTableFunc } from '../../controllers/getFuncs/EntryFile.js';


router.get('/Table/:inTable/:id', GetIdWithTableFunc);

export { router };