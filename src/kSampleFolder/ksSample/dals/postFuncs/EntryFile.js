import { StartFunc as StartFuncWriteFileKeysCheck } from '../../kLowDb/WriteTofile/WithChecking/StartFunc.js';

let PostWithKeysCheckFunc = ({ inBodyKeys, inDataPk }) => {
    return StartFuncWriteFileKeysCheck({ inDataToInsert: inBodyKeys, inDataPk });
};

export {
    PostWithKeysCheckFunc
};