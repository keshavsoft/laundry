import { StartFunc as StartFuncReturnAsArray } from "../../kLowDb/ReadFromFile/ReturnAsArray.js";
import { StartFunc as StartFuncMaxRow } from '../../kLowDb/ReadFromFile/MaxRow.js';
import { StartFunc as StartFunRowDataByKeyId } from '../../kLowDb/ReadFromFile/RowDataByKeyId.js';
import { StartFunc as StartFunFilterDataByKeyId } from '../../kLowDb/ReadFromFile/FilterDataByKeyId.js';



let GetFunc = ({inDataPk}) => {
    return StartFuncReturnAsArray({inDataPk});
};

let GetMaxRowFunc = () => {
    return StartFuncMaxRow();
};
let GetRowDataFunc = ({ inKey, inValue }) => {
    return StartFunRowDataByKeyId({ inKey, inValue });

};

let GetFilterDataFunc = ({ inKey, inValue }) => {
    return StartFunFilterDataByKeyId({ inKey, inValue });

};

let GetDataOnlyFunc = ({inDataPk}) => {
    let LocalFromLowDb = StartFuncReturnAsArray({inDataPk});

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

export {
    GetFunc, GetDataOnlyFunc,GetMaxRowFunc,GetRowDataFunc,GetFilterDataFunc
};