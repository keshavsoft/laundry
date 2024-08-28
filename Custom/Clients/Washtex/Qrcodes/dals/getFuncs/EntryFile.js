import { StartFunc as StartFunGenerateQrWithTable } from '../../kLowDb/CommonFuncs/GenerateQrWithTable/GenerateQrWithTable.js';
import { StartFunc as Show } from '../../kLowDb/Show/EntryFile.js';

let GetIdWithTableFunc = ({ inTable, inId }) => {
    let LocalFromLowDb = StartFunGenerateQrWithTable({ inTable, inId });

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetHomeFunc = () => {
    let LocalFromLowDb = Show();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetBranchDateFunc = ({ BranchDate }) => {
    let LocalFromLowDb = Show({ BranchDate });

    if (LocalFromLowDb === false) {
        return false;
    };
    return LocalFromLowDb();
};
let GetBranchNameFunc = ({ inBranchName }) => {
    let LocalFromLowDb = Show({ inBranchName });

    if (LocalFromLowDb === false) {
        return false;
    };
    return LocalFromLowDb();
};
let GetDateFunc = ({ inDate }) => {
    let LocalFromLowDb = Show({ inDate });

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetTodayFunc = () => {
    let LocalFromLowDb = Show();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetBranchTodayFunc = ({ BranchToday }) => {
    let LocalFromLowDb = Show({ BranchToday });

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
export {
    GetIdWithTableFunc,
    GetHomeFunc, GetBranchDateFunc, GetBranchNameFunc, GetBranchTodayFunc, GetDateFunc,
    GetTodayFunc
};