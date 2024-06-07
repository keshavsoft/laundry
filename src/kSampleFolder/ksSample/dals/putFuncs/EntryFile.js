import { StartFunc as StartFuncUpdateFile } from '../../kLowDb/UpdateFile/UpdateRow.js';

let PutFunc = ({ inDataToUpdate, inId, inDataPk }) => {
    return StartFuncUpdateFile({ inDataToUpdate, inId, inDataPk });
};

export {
    PutFunc
};