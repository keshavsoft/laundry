import {
  PutFunc as PutFuncDal
} from '../../dals/putFuncs/EntryFile.js';

let PutFunc = async ({ inDataToUpdate, inId, inDataPk }) => {
  return PutFuncDal({ inDataToUpdate, inId, inDataPk });
};

export { PutFunc };
