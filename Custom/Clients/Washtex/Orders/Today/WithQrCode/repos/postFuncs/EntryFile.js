import { FilterDataFrombodyFunc as FilterDataFrombodyFuncDal } from '../../dals/postFuncs/EntryFile.js';

let FilterDataFrombodyFunc = ({ inBranchName, inFindValue }) => {
    return FilterDataFrombodyFuncDal({ inBranchName, inFindValue });
};

export { FilterDataFrombodyFunc };