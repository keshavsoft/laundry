import {
    DeleteFunc as DeleteFuncDal
} from '../../dals/DeleteFuncs/EntryFile.js';

let DeleteFunc = async ({ inId, inDataPk }) => {
    return await DeleteFuncDal({ inId, inDataPk });
};

export { DeleteFunc };