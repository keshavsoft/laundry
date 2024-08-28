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
let GetBranchNameFunc = () => {
    let LocalFromLowDb = Show();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetDateFunc = () => {
    let LocalFromLowDb = Show();

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

export {
    GetIdWithTableFunc,
    GetHomeFunc, GetBranchNameFunc, GetDateFunc,
    GetTodayFunc
};