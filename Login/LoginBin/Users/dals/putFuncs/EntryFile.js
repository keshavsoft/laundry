import { StartFunc as StartFuncUpdateData } from '../../kLowDb/UpdateData.js';
import { StartFunc as StartFuncUpdateDataEmail } from '../../kLowDb/UpdateData/Email.js';

let PutFunc = ({ inDataToUpdate, inId }) => {
    // return StartFuncUpdateData({ inDataToUpdate, inId });
    return StartFuncUpdateDataEmail({ inUuid : inId});
};

export { PutFunc };