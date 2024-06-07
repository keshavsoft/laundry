
import {
    PostWithKeysCheckFunc as PostWithKeysCheckFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostWithKeysCheckFunc = async ({inModalObject, inDataPk}) => {
    return PostWithKeysCheckFuncDal({ inBodyKeys: inModalObject, inDataPk });
};

export {
    PostWithKeysCheckFunc
};