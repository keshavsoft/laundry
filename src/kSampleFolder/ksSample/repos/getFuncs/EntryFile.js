import {
  GetFunc as GetFuncDal,
  GetDataOnlyFunc as GetDataOnlyFuncDal,
  GetMaxRowFunc as GetMaxRowFuncDal,
  GetRowDataFunc as GetRowDataFuncDal,
  GetFilterDataFunc as GetFilterDataFuncDal,
} from "../../dals/getFuncs/EntryFile.js";

let GetFunc = async ({ inDataPk }) => {
  return GetFuncDal({ inDataPk });
};

let GetfilterDataFunc = ({ inKey, inValue }) => {
  return GetFilterDataFuncDal({ inKey, inValue });
};

let GetDataOnlyFunc = async ({ inDataPk }) => {
  return GetDataOnlyFuncDal({ inDataPk });
};

let GetMaxRowFunc = () => {
  return GetMaxRowFuncDal();
};

let GetRowDataFunc = ({ inKey, inValue }) => {
  return GetRowDataFuncDal({ inKey, inValue });
};


export { GetFunc, GetDataOnlyFunc ,GetMaxRowFunc,GetRowDataFunc ,GetfilterDataFunc};
