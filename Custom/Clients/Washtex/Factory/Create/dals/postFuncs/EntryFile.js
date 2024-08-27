import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/WithChecking/StartFunc.js';
import { StartFunc as Send } from '../../kLowDb/WriteTofile/Send/EntryFile.js';
import { StartFunc as ToFactoryScan } from '../../kLowDb/WriteTofile/ToFactoryScan/StartFunc.js';

let PostFunc = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};

let PostFuncGenUuId = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};

let PostWithCheckAndGenPkFunc = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};
let PostSendMailGenUuIdFunc = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};

let PostSendMailFunc = async ({ inPostBody, inDomainName }) => {
    return await Send({ inDataToInsert: inPostBody, inDomainName });
};

let FromBranchScanFunc = (inPostBody) => {
    return ToFactoryScan({ inDataToInsert: inPostBody });
};

export {
    PostFunc, PostFuncGenUuId, PostWithCheckAndGenPkFunc,
    PostSendMailGenUuIdFunc, PostSendMailFunc, FromBranchScanFunc
};