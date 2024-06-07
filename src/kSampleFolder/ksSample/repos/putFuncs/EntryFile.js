import {
  PutFunc as PutFuncDal,
  PutInsertToKeyFunc as PutInsertToKeyFuncDal,
} from '../../dals/putFuncs/EntryFile.js';

let PutFunc = async ({ inDataToUpdate, inId, inDataPk }) => {
  return PutFuncDal({ inDataToUpdate, inId, inDataPk });
};

let PutInsertToKeyFunc = async ({ inDataToUpdate, inId, inKeyName }) => {
  return PutInsertToKeyFuncDal({ inDataToUpdate, inId, inKeyName });
};

export { PutFunc ,PutInsertToKeyFunc};
