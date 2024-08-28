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
let GetBranchDateFunc = () => {
    let LocalFromLowDb = Show();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetBranchTodayFunc = () => {
    let LocalFromLowDb = Show();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
export {
    GetIdWithTableFunc,
    GetHomeFunc,GetBranchDateFunc,GetBranchTodayFunc
};