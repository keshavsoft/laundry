import {
    PostFunc as PostFuncDal,
    PostFuncGenUuId as PostFuncGenUuIdDal,
    PostWithCheckAndGenPkFunc as PostWithCheckAndGenPkFuncDal,
    PostSendMailGenUuIdFunc as PostSendMailGenUuIdFuncDal,
    PostSendMailFunc as PostSendMailFuncDal,
    ToFactoryScanFunc as ToFactoryScanFuncDal
} from '../../dals/postFuncs/EntryFile.js';

// import {
//     PostFunc as PostFuncDalsForSequelize
// } from '../../dalsForSequelize/postFuncs/EntryFile.js';

// import {
//     PostFunc as PostFuncDalsForMongoDB
// } from '../../dalsForMongoDb/postFuncs/EntryFile.js';

import ConfigJson from '../../../../Config.json' assert {type: 'json'};

let PostFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return PostFuncDal(inPostBody);
};

let PostFuncGenUuId = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return PostFuncGenUuIdDal(inPostBody);
};

let PostWithCheckAndGenPkFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return PostWithCheckAndGenPkFuncDal(inPostBody);
};
let PostSendMailGenUuIdFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return PostSendMailGenUuIdFuncDal(inPostBody);
};

let PostSendMailFunc = async ({ inPostBody, inDomainName }) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return await PostSendMailFuncDal({ inPostBody, inDomainName });
};
let ToFactoryScanFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return ToFactoryScanFuncDal(inPostBody);
};


export {
    PostFunc, PostFuncGenUuId, PostWithCheckAndGenPkFunc,
    PostSendMailGenUuIdFunc, PostSendMailFunc, ToFactoryScanFunc
};