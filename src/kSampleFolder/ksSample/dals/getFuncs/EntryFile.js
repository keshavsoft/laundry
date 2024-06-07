import { StartFunc as StartFuncReturnAsArray } from "../../kLowDb/ReadFromFile/ReturnAsArray.js";

let GetFunc = ({inDataPk}) => {
    return StartFuncReturnAsArray({inDataPk});
};

let GetDataOnlyFunc = ({inDataPk}) => {
    let LocalFromLowDb = StartFuncReturnAsArray({inDataPk});

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

export {
    GetFunc, GetDataOnlyFunc
};