import { PostFunc as PostFuncDal, PostFuncWithMail as PostFuncDalWithMail, PostFuncEndUser as PostFuncDalEndUser } from '../../dals/postFuncs/EntryFile.js';




let PostFunc = ({ inUsername,inPassword }) => {
    return PostFuncDal({ inUsername,inPassword });
};

let PostFuncWithMail = ({ inUsername,inPassword,inMail }) => {
    return PostFuncDalWithMail({ inUsername,inPassword,inMail });
};

let PostFuncWithEndUser = ({ inUsername,inPassword,inMail }) => {
    return PostFuncDalEndUser({ inUsername,inPassword,inMail });
};

export { PostFunc , PostFuncWithMail, PostFuncWithEndUser};