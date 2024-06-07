import { PostWithKeysCheckFunc as PostWithKeysCheckFuncRepo } from "../../repos/postFuncs/EntryFile.js";

let PostWithKeysCheckFunc = async (req, res) => {
  let LocalBody = req.body;
  let LocalReqLocals = req.locals;
  let LocalDataPk = LocalReqLocals.KeshavSoft.DataPk;
  let LocalFromRepo = await PostWithKeysCheckFuncRepo({
    inModalObject: { ...LocalBody },
    inDataPk: LocalDataPk,
  });

  res.json(LocalFromRepo);
};

export { PostWithKeysCheckFunc };
