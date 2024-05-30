import express from 'express';
var router = express.Router();

import { PostFunc } from '../../controllers/postFuncs/EntryFile.js';
import { PostFunc as PostFuncMiddleWare } from "../../Middlewares/postFuncs/EntryFile.js";

router.post('/', PostFuncMiddleWare, PostFunc);

export { router };