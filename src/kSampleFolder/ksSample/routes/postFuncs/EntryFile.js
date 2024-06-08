import express from "express";

var router = express.Router();

import { PostWithKeysCheckFunc,FilterDataFrombodyFunc,PostFunc } from "../../controllers/postFuncs/EntryFile.js";

router.post("/WithKeysCheck", PostWithKeysCheckFunc);
router.post('/FilterDataFrombody', FilterDataFrombodyFunc);
router.post('/', PostFunc);



export { router };
