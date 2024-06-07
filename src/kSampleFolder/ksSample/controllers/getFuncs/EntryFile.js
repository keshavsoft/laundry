import {
  GetFunc as GetFuncRepo,
  GetDataOnlyFunc as GetDataOnlyFuncRepo,
  GetMaxRowFunc as GetMaxRowFuncRepo,
  GetRowDataFunc as GetRowDataFuncRepo,
  GetfilterDataFunc as GetfilterDataFuncRepo,
} from "../../repos/getFuncs/EntryFile.js";

let GetFunc = async (req, res) => {
  let LocalReqLocals = req.locals;
  let LocalDataPk = LocalReqLocals.KeshavSoft.DataPk;
  let LocalFromRepo = await GetFuncRepo({ inDataPk: LocalDataPk });

  res.status(200);
  res.json(LocalFromRepo);
};

let GetFilterDataFunc = (req, res) => {
  let LocalParams = req.params;
  let LocalIdKeyFromParam = LocalParams.inKey;
  let LocalIfFromParam = LocalParams.inValue;

  let LocalFromRepo = GetfilterDataFuncRepo({ inKey: LocalIdKeyFromParam, inValue: LocalIfFromParam });

  if (LocalFromRepo.KTF === false) {
      res.status(500).send(LocalFromRepo.KReason);
      return;
  };

  res.json(LocalFromRepo.JsonData);
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

let GetRowDataFunc = (req, res) => {
  let LocalParams = req.params;
  let LocalIdKeyFromParam = LocalParams.inKey;
  let LocalIfFromParam = LocalParams.inValue;

  let LocalFromRepo = GetRowDataFuncRepo({ inKey: LocalIdKeyFromParam, inValue: LocalIfFromParam });

  if (LocalFromRepo.KTF === false) {
      res.status(500).send(LocalFromRepo.KReason);
      return;
  };

  res.json(LocalFromRepo.JsonData);
};


export { GetFunc, GetDataOnlyFunc ,GetMaxRowFunc,GetRowDataFunc,GetFilterDataFunc};
