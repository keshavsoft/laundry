import express from 'express';

var router = express.Router();

import {
    GetFunc, GetDataOnlyFunc,
    GetMaxRowFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/DataOnly', GetDataOnlyFunc);
router.get('/MaxRow', GetMaxRowFunc);


export { router };