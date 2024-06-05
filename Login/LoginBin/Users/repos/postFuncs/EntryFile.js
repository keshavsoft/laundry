import { PostFunc as PostFuncDal } from '../../dals/postFuncs/EntryFile.js';
import { PostFuncWithMail as PostFuncDalWithMail } from '../../dals/postFuncs/EntryFile.js';



let PostFunc = ({ inUsername,inPassword }) => {
    return PostFuncDal({ inUsername,inPassword });
};

let PostFuncWithMail = ({ inUsername,inPassword,inMail }) => {
    return PostFuncDalWithMail({ inUsername,inPassword,inMail });
};

export { PostFunc , PostFuncWithMail};