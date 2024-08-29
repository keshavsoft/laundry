import {
  GetFunc as GetFuncDal
} from '../../dals/GetFuncs/EntryFile.js';

import {
  PutFunc as PutFuncDalsForSequelize
} from '../../dalsForSequelize/putFuncs/EntryFile.js';

import { PutFunc as PutFuncDalsForMongoDB } from "../../dalsForMongoDb/putFuncs/EntryFile.js";

import ConfigJson from '../../../../Config.json' assert {type: 'json'};


let GetFunc = async ({ inId, inKey, inValue }) => {
  if (ConfigJson.isSequelize) {
    return PutFuncDalsForSequelize({ inId, inKey, inValue });
  };

  if (ConfigJson.isMongoDb) {
    return PutFuncDalsForMongoDB({ inId, inKey, inValue });
  };

  return GetFuncDal({ inId, inKey, inValue });
};

export { GetFunc };
