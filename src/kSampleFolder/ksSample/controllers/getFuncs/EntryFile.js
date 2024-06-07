import {
  GetFunc as GetFuncRepo,
  GetDataOnlyFunc as GetDataOnlyFuncRepo,
  GetMaxRowFunc as GetMaxRowFuncRepo,
} from "../../repos/getFuncs/EntryFile.js";

let GetFunc = async (req, res) => {
  let LocalReqLocals = req.locals;
  let LocalDataPk = LocalReqLocals.KeshavSoft.DataPk;
  let LocalFromRepo = await GetFuncRepo({ inDataPk: LocalDataPk });

  res.status(200);
  res.json(LocalFromRepo);
};

let GetDataOnlyFunc = async (req, res) => {
  let LocalReqLocals = req.locals;
  let LocalDataPk = LocalReqLocals.KeshavSoft.DataPk;
  let LocalFromRepo = await GetDataOnlyFuncRepo({ inDataPk: LocalDataPk });

  res.status(200);
  res.json(LocalFromRepo);
};

let GetMaxRowFunc = (req, res) => {
  let LocalFromRepo = GetMaxRowFuncRepo();

  if (LocalFromRepo.KTF === false) {
      res.status(500).send(LocalFromRepo.KReason);
      return;
  };

  res.json(LocalFromRepo.JsonData);
};


export { GetFunc, GetDataOnlyFunc ,GetMaxRowFunc};
