import {
  GetFunc as GetFuncDal,
  GetDataOnlyFunc as GetDataOnlyFuncDal,
  GetMaxRowFunc as GetMaxRowFuncDal,
  GetRowDataFunc as GetRowDataFuncDal,
  GetFilterDataFunc as GetFilterDataFuncDal,
  GetRowCountByIdFunc as GetRowCountByIdFuncDal,
  GetIdFunc as GetIdFuncDal
} from "../../dals/getFuncs/EntryFile.js";

let GetFunc = async ({ inDataPk }) => {
  return GetFuncDal({ inDataPk });
};
let GetRowCountByIdFunc = ({ inKey, inValue }) => {
  return GetRowCountByIdFuncDal({ inKey, inValue });
};
let GetfilterDataFunc = ({ inKey, inValue }) => {
  return GetFilterDataFuncDal({ inKey, inValue });
};
let GetIdFunc = ({ inId }) => {
  return GetIdFuncDal({ inId });
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


export { GetFunc, GetDataOnlyFunc ,GetMaxRowFunc,GetRowDataFunc ,GetfilterDataFunc,GetRowCountByIdFunc,GetIdFunc};
