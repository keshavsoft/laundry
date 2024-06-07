import express from "express";

var router = express.Router();

import { PostWithKeysCheckFunc,FilterDataFrombodyFunc } from "../../controllers/postFuncs/EntryFile.js";

router.post("/WithKeysCheck", PostWithKeysCheckFunc);
router.post('/FilterDataFrombody', FilterDataFrombodyFunc);


export { router };
