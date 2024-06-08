import { StartFunc as StartFuncWriteFileKeysCheck } from '../../kLowDb/WriteTofile/WithChecking/StartFunc.js';
import { StartFunc as StartFuncAsIs } from '../../kLowDb/WriteTofile/AsIs/InsertRow.js';

let PostWithKeysCheckFunc = ({ inBodyKeys, inDataPk }) => {
    return StartFuncWriteFileKeysCheck({ inDataToInsert: inBodyKeys, inDataPk });
};
let PostFunc = ({ inBodyKeys }) => {
    return StartFuncAsIs({ inDataToInsert: inBodyKeys });
};

export {
    PostWithKeysCheckFunc,PostFunc
};