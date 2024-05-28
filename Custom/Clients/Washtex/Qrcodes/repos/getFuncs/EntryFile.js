// import { GetIdFunc as GetIdFuncDal } from '../../dals/getFuncs/EntryFile.js';
import { GetIdWithTableFunc as GetIdWithTableFuncDal } from '../../dals/getFuncs/EntryFile.js';



let GetIdWithTableFunc = async ({ inTable, inId }) => {
    return GetIdWithTableFuncDal({ inTable, inId });
};

export { GetIdWithTableFunc };