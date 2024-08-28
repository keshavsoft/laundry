import express from 'express';

var router = express.Router();

import {
    PutFunc
}
    from '../../controllers/putFuncs/EntryFile.js';

router.put('/:id', PutFunc);

export { router };