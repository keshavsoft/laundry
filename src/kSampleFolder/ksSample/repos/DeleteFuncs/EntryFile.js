import {
    DeleteFunc as DeleteFuncDal,
    DeleteFromKeyFunc as DeleteFromKeyFuncDal
} from '../../dals/DeleteFuncs/EntryFile.js';

let DeleteFunc = async ({ inId, inDataPk }) => {
    return await DeleteFuncDal({ inId, inDataPk });
};

let DeleteFromKeyFunc = async ({ inSubId, inId, inKeyName }) => {
    return await DeleteFromKeyFuncDal({ inSubId, inId, inKeyName });
};

export { DeleteFunc, DeleteFromKeyFunc };