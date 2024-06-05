import { StartFunc as StartFuncPullData } from '../../kLowDb/GetData.js';
import { StartFunc as StartFuncUpdateData } from '../../kLowDb/UpdateData/Email.js';


let GetFunc = () => {
    return StartFuncPullData();
};

let ValidateEmailFunc = ({inUuid}) => {
    return StartFuncUpdateData({inUuid});
};

export { GetFunc, ValidateEmailFunc };