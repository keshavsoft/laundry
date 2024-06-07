import express from "express";

var router = express.Router();

import { PostWithKeysCheckFunc } from "../../controllers/postFuncs/EntryFile.js";

router.post("/WithKeysCheck", PostWithKeysCheckFunc);

export { router };
