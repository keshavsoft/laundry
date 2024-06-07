import { StartFunc as StartFuncReturnAsArray } from "../../kLowDb/ReadFromFile/ReturnAsArray.js";
import { StartFunc as StartFuncMaxRow } from '../../kLowDb/ReadFromFile/MaxRow.js';

let GetFunc = ({inDataPk}) => {
    return StartFuncReturnAsArray({inDataPk});
};

let GetMaxRowFunc = () => {
    return StartFuncMaxRow();
};

let GetDataOnlyFunc = ({inDataPk}) => {
    let LocalFromLowDb = StartFuncReturnAsArray({inDataPk});

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

export {
    GetFunc, GetDataOnlyFunc,GetMaxRowFunc
};