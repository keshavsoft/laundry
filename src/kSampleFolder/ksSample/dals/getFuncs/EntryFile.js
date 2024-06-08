import { StartFunc as StartFuncReturnAsArray } from "../../kLowDb/ReadFromFile/ReturnAsArray.js";
import { StartFunc as StartFuncMaxRow } from '../../kLowDb/ReadFromFile/MaxRow.js';
import { StartFunc as StartFunRowDataByKeyId } from '../../kLowDb/ReadFromFile/RowDataByKeyId.js';
import { StartFunc as StartFunFilterDataByKeyId } from '../../kLowDb/ReadFromFile/FilterDataByKeyId.js';
import { StartFunc as StartFuncGetRowCountById } from '../../kLowDb/ReadFromFile/RowCountById.js';
import { StartFunc as StartFunReadFileByPk } from '../../kLowDb/ReadFromFile/readFileByPk.js';





let GetFunc = ({inDataPk}) => {
    return StartFuncReturnAsArray({inDataPk});
};

let GetMaxRowFunc = () => {
    return StartFuncMaxRow();
};
let GetRowDataFunc = ({ inKey, inValue }) => {
    return StartFunRowDataByKeyId({ inKey, inValue });

};
let GetRowCountByIdFunc = ({ inKey, inValue }) => {
    return StartFuncGetRowCountById({ inKey, inValue });

};
let GetIdFunc = ({ inId }) => {
    let LocalFromLowDb = StartFunReadFileByPk({ inId });

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
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
    GetFunc, GetDataOnlyFunc,GetMaxRowFunc,GetRowDataFunc,GetFilterDataFunc,GetRowCountByIdFunc,GetIdFunc
};