import { StartFunc as StartFuncPullData } from '../../kLowDb/PullData.js';
import { StartFunc as StartFuncPullDataWithMail } from '../../kLowDb/1-PullData.js';

let PostFunc = ({ inUsername, inPassword }) => {
    return StartFuncPullData({ inUsername, inPassword });
};

let PostFuncWithMail = ({ inUsername, inPassword, inMail }) => {
    return StartFuncPullDataWithMail({ inUsername, inPassword, inMail });
};

export { PostFunc, PostFuncWithMail };