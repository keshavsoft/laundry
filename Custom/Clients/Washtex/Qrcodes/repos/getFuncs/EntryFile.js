// import { GetIdFunc as GetIdFuncDal } from '../../dals/getFuncs/EntryFile.js';
import {
    GetIdWithTableFunc as GetIdWithTableFuncDal,
    GetHomeFunc as GetHomeFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetIdWithTableFunc = async ({ inTable, inId }) => {
    return GetIdWithTableFuncDal({ inTable, inId });
};

let GetHomeFunc = () => {
    return GetHomeFuncDal();
};

export {
    GetIdWithTableFunc,
    GetHomeFunc
};