import express from 'express';
var router = express.Router();

import {
    GetIdWithTableFunc, GetHomeFunc,
    GetBranchDateFunc, GetBranchTodayFunc,
    GetBranchNameFunc, GetDateFunc, GetTodayFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetHomeFunc);
router.get('/Branch/:inBranchName', GetBranchNameFunc);
router.get('/Date/:inDate', GetDateFunc);
router.get('/Today', GetTodayFunc);
router.get('/BranchDate/:inBranchName/:inDate', GetBranchDateFunc);
router.get('/BranchToday/:inBranchName', GetBranchTodayFunc);
router.get('/Table/:inTable/:id', GetIdWithTableFunc);

export { router };

