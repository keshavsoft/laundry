import {
  GetFunc as GetFuncDal,
  GetDataOnlyFunc as GetDataOnlyFuncDal,
  GetMaxRowFunc as GetMaxRowFuncDal,
} from "../../dals/getFuncs/EntryFile.js";

let GetFunc = async ({ inDataPk }) => {
  return GetFuncDal({ inDataPk });
};

let GetDataOnlyFunc = async ({ inDataPk }) => {
  return GetDataOnlyFuncDal({ inDataPk });
};

let GetMaxRowFunc = () => {
  return GetMaxRowFuncDal();
};


export { GetFunc, GetDataOnlyFunc ,GetMaxRowFunc };
