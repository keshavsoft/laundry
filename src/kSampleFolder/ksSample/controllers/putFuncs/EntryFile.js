import {
  PutFunc as PutFuncRepo,
  PutInsertToKeyFunc as PutInsertToKeyFuncRepo,
} from "../../repos/putFuncs/EntryFile.js";

let PutFunc = async (req, res) => {
  // let LocalDataToUpdate = ColumnsPullFunc()(req.body);
  let LocalDataToUpdate = req.body;

  let LocalIfFromParam = req.params.id;
  let LocalReqLocals = req.locals;
  let LocalDataPk = LocalReqLocals.KeshavSoft.DataPk;

  let LocalFromRepo = await PutFuncRepo({
    inDataToUpdate: LocalDataToUpdate,
    inId: LocalIfFromParam,
    inDataPk: LocalDataPk,
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo.KReason);
    return;
  };

  res.json(LocalFromRepo);
};

let PutInsertToKeyFunc = async (req, res) => {
  // let LocalDataToUpdate = ColumnsPullFunc()(req.body);
  let LocalDataToUpdate = req.body;

  let LocalIfFromParam = req.params.id;
  let LocalKeyName = req.params.inKey;

  let LocalFromRepo = await PutInsertToKeyFuncRepo({
    inDataToUpdate: LocalDataToUpdate,
    inId: LocalIfFromParam,
    inKeyName: LocalKeyName
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo.KReason);
    return;
  };

  res.json(LocalFromRepo);
};

export { PutFunc,PutInsertToKeyFunc };
