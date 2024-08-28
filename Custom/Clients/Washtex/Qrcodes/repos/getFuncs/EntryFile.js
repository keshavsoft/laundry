// import { GetIdFunc as GetIdFuncDal } from '../../dals/getFuncs/EntryFile.js';
import {
    GetIdWithTableFunc as GetIdWithTableFuncDal,
    GetHomeFunc as GetHomeFuncDal,
    GetBranchDateFunc as GetBranchDateFuncDal,
    GetBranchTodayFunc as GetBranchTodayFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetIdWithTableFunc = async ({ inTable, inId }) => {
    return GetIdWithTableFuncDal({ inTable, inId });
};

let GetHomeFunc = () => {
    return GetHomeFuncDal();
};
let GetBranchDateFunc = () => {
    return GetBranchDateFuncDal();
};
let GetBranchTodayFunc = () => {
    return GetBranchTodayFuncDal();
};

export {
    GetIdWithTableFunc,
    GetHomeFunc,GetBranchDateFunc,GetBranchTodayFunc
};