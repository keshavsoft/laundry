// import { GetIdFunc as GetIdFuncDal } from '../../dals/getFuncs/EntryFile.js';
import {
    GetIdWithTableFunc as GetIdWithTableFuncDal,
    GetHomeFunc as GetHomeFuncDal,
    GetBranchNameFunc as GetBranchNameFunc,
    GetDateFunc as GetDateFuncDal,
    GetTodayFunc as GetTodayFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetIdWithTableFunc = async ({ inTable, inId }) => {
    return GetIdWithTableFuncDal({ inTable, inId });
};

let GetHomeFunc = () => {
    return GetHomeFuncDal();
};
let GetBranchNameFunc = () => {
    return GetBranchNameFuncDal();
};
let GetDateFunc = () => {
    return GetDateFuncDal();
};
let GetTodayFunc = () => {
    return GetTodayFuncDal();
};

export {
    GetIdWithTableFunc,
    GetHomeFunc, GetBranchNameFunc, GetDateFunc, GetTodayFunc
};