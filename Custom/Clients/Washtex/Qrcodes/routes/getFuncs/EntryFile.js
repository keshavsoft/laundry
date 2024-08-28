import express from 'express';
var router = express.Router();

import { GetIdWithTableFunc, GetHomeFunc, GetBranchNameFunc, GetDateFunc } from '../../controllers/getFuncs/EntryFile.js';

router.get('/Home/:inHome', GetHomeFunc);
router.get('/Branch/:inBranchName', GetBranchNameFunc);
router.get('/Date/:inDate', GetDateFunc);
router.get('/Today', GetTodayFunc);
router.get('/BranchDate/:inBranchName/:inDate', GetBranchDateFunc);
router.get('/BranchToday/', GetBranchTodayFunc);

router.get('/Table/:inTable/:id', GetIdWithTableFunc);

export { router };

