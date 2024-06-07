import {
  PutFunc as PutFuncDal,
  PutInsertToKeyFunc as PutInsertToKeyFuncDal,
  PutUpdateUsingLoadAshFunc as PutUpdateUsingLoadAshFuncDal
} from '../../dals/putFuncs/EntryFile.js';

let PutFunc = async ({ inDataToUpdate, inId, inDataPk }) => {
  return PutFuncDal({ inDataToUpdate, inId, inDataPk });
};

let PutInsertToKeyFunc = async ({ inDataToUpdate, inId, inKeyName }) => {
  return PutInsertToKeyFuncDal({ inDataToUpdate, inId, inKeyName });
};

let PutUpdateUsingLoadAshFunc = async ({ inDataToUpdate, inId, inFindKey, inReplaceValue }) => {
  return PutUpdateUsingLoadAshFuncDal({ inDataToUpdate, inId, inFindKey, inReplaceValue });
};

export { PutFunc, PutInsertToKeyFunc, PutUpdateUsingLoadAshFunc };
