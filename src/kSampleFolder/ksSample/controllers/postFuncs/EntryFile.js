import { PostWithKeysCheckFunc as PostWithKeysCheckFuncRepo ,FilterDataFrombodyFunc as FilterDataFrombodyFuncRepo,
  PostFunc as PostFuncRepo} from "../../repos/postFuncs/EntryFile.js";

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
let PostFunc = async (req, res) => {
  let LocalBody = req.body;

  let LocalFromRepo = await PostFuncRepo({ ...LocalBody });

  if (LocalFromRepo.KTF === false) {
      res.status(500).send(LocalFromRepo.KReason);
      return;
  };

  res.json(LocalFromRepo);
};

let FilterDataFrombodyFunc = (req, res) => {
  let LocalBodyFindKey = req.body.FindKey
  let LocalBodyFindValue = req.body.FindValue

  let LocalFromRepo = FilterDataFrombodyFuncRepo({ inFindKey: LocalBodyFindKey, inFindValue: LocalBodyFindValue });
  res.json(LocalFromRepo);
};

export { PostWithKeysCheckFunc,FilterDataFrombodyFunc,PostFunc };
