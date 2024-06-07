import { StartFunc as StartFuncwriteFile } from '../../kLowDb/WriteFileList/DeleteFile.js';

let DeleteFunc = ({ inId, inDataPk }) => {
    return StartFuncwriteFile({ inId, inDataPk });
};

export { DeleteFunc };