import express from 'express';
let router = express.Router();

import { FilterDataFrombodyFunc } from '../../controllers/postFuncs/EntryFile.js';

router.post('/', FilterDataFrombodyFunc);

export { router };