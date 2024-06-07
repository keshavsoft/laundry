import {
  GetFunc as GetFuncRepo,
  GetDataOnlyFunc as GetDataOnlyFuncRepo,
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

export { GetFunc, GetDataOnlyFunc };
