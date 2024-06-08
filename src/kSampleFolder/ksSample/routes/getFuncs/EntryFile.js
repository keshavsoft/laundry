import express from 'express';

var router = express.Router();

import {
    GetFunc, GetDataOnlyFunc,
    GetMaxRowFunc,
    GetRowDataFunc,
    GetFilterDataFunc,
    GetRowCountByIdFunc,
    GetIdFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/DataOnly', GetDataOnlyFunc);
router.get('/MaxRow', GetMaxRowFunc);
router.get('/RowData/:inKey/:inValue', GetRowDataFunc);
router.get('/FilterData/:inKey/:inValue', GetFilterDataFunc);
router.get('/RowCount/:inKey/:inValue', GetRowCountByIdFunc);
router.get('/:id', GetIdFunc);




export { router };