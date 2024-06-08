
import {
    PostWithKeysCheckFunc as PostWithKeysCheckFuncDal
} from '../../dals/postFuncs/EntryFile.js';
import { StartFunc as StartFuncreadreadFileUsingbyBody } from '../../kLowDb/ReadFileList/readFileUsingbyBody.js';


let PostWithKeysCheckFunc = async ({inModalObject, inDataPk}) => {
    return PostWithKeysCheckFuncDal({ inBodyKeys: inModalObject, inDataPk });
};

let FilterDataFrombodyFunc = ({ inFindValue, inFindKey }) => {
    return StartFuncreadreadFileUsingbyBody({ inFindValue, inFindKey });
};


export {
    PostWithKeysCheckFunc,FilterDataFrombodyFunc
};