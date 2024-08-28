import express from 'express';
var router = express.Router();

import { GetIdWithTableFunc, GetHomeFunc } from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetHomeFunc);
router.get('/Branch/:inBranchName', GetHomeFunc);
router.get('/Date/:inDate', GetHomeFunc);
router.get('/Today', GetHomeFunc);
router.get('/BranchDate/:inBranchName/:inDate', GetHomeFunc);
router.get('/BranchToday', GetHomeFunc);

router.get('/Table/:inTable/:id', GetIdWithTableFunc);

export { router };

