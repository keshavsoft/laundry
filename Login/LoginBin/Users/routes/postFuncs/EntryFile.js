import express from 'express';
var router = express.Router();

import { PostFunc, PostFuncWithMail as PostFuncWithMail, PostFuncEndUser as PostFuncForUser } from '../../controllers/postFuncs/EntryFile.js';
import { PostFunc as PostFuncMiddleWare } from "../../Middlewares/postFuncs/EntryFile.js";
import { PostFunc as PostFuncWithMailMiddleWare } from "../../Middlewares/postFuncs/1-EntryFile.js";

router.post('/', PostFuncMiddleWare, PostFunc);
router.post("/withMail", PostFuncWithMailMiddleWare, PostFuncWithMail);
router.post("/endUser", PostFuncWithMailMiddleWare, PostFuncForUser);
//withDataPk, DataPk

export { router };