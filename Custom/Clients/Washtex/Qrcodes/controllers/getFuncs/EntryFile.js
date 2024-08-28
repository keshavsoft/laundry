import {
    GetIdWithTableFunc as GetIdWithTableFuncRepo,
    GetHomeFunc as GetHomeFuncRepo,
    GetBranchNameFunc as GetBranchNameFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetIdWithTableFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalinTableFromParam = LocalParams.inTable;
    let LocalIdFromParam = LocalParams.id;

    let LocalFromRepo = await GetIdWithTableFuncRepo({ inTable: LocalinTableFromParam, inId: LocalIdFromParam });
    res.json(LocalFromRepo);
};

let GetHomeFunc = (req, res) => {
    let LocalFromRepo = GetHomeFuncRepo();
    res.json(LocalFromRepo);
};
let GetBranchNameFunc = (req, res) => {
    let LocalFromRepo = GetBranchNameFuncRepo();
    res.json(LocalFromRepo);
};

export { GetIdWithTableFunc, GetHomeFunc, GetBranchNameFunc };