// import { GetIdFunc as GetIdFuncDal } from '../../dals/getFuncs/EntryFile.js';
import {
    GetIdWithTableFunc as GetIdWithTableFuncDal,
    GetHomeFunc as GetHomeFuncDal,
    GetBranchDateFunc as GetBranchDateFuncDal,
    GetBranchTodayFunc as GetBranchTodayFuncDal,
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

let GetBranchDateFunc = ({ BranchDate }) => {
    return GetBranchDateFuncDal({ BranchDate });
};
let GetBranchTodayFunc = ({ BranchToday }) => {
    return GetBranchTodayFuncDal({ BranchToday });
};

// let GetBranchNameFunc = ({ inBranchName }) => {
//     return GetBranchNameFuncDal({ inBranchName });
// };
let GetDateFunc = ({ inDate }) => {
    return GetDateFuncDal({ inDate });
};
let GetTodayFunc = () => {
    return GetTodayFuncDal();
};

export {
    GetIdWithTableFunc,
    GetHomeFunc, GetBranchDateFunc, GetBranchTodayFunc,
    GetBranchNameFunc, GetDateFunc, GetTodayFunc
};