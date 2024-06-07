import {
  GetFunc as GetFuncDal,
  GetDataOnlyFunc as GetDataOnlyFuncDal,
} from "../../dals/getFuncs/EntryFile.js";

let GetFunc = async ({ inDataPk }) => {
  return GetFuncDal({ inDataPk });
};

let GetDataOnlyFunc = async ({ inDataPk }) => {
  return GetDataOnlyFuncDal({ inDataPk });
};

export { GetFunc, GetDataOnlyFunc };
