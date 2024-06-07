import { StartFunc as StartFuncUpdateFile } from '../../kLowDb/UpdateFile/UpdateRow.js';
import { StartFunc as StartFuncInsertToSubOfRow } from '../../kLowDb/UpdateFile/InsertToSubOfRow.js';


let PutFunc = ({ inDataToUpdate, inId, inDataPk }) => {
    return StartFuncUpdateFile({ inDataToUpdate, inId, inDataPk });
};
let PutInsertToKeyFunc = ({ inDataToUpdate, inId, inKeyName }) => {
    return StartFuncInsertToSubOfRow({ inDataToUpdate, inId, inKeyName });
};

export {
    PutFunc,PutInsertToKeyFunc
};