import {
    GetIdWithTableFunc as GetIdWithTableFuncRepo,
    GetHomeFunc as GetHomeFuncRepo,
    GetBranchNameFunc as GetBranchNameFuncRepo,
    GetBranchDateFunc as GetBranchDateFuncRepo,
    GetBranchTodayFunc as GetBranchTodayFuncRepo,
    GetDateFunc as GetDateFuncRepo,
    GetTodayFunc as GetTodayFuncRepo
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
    let LocalBranchName = req.params.inBranchName;
    let LocalFromRepo = GetBranchNameFuncRepo({ inBranchName: LocalBranchName });
    res.json(LocalFromRepo);
};
let GetBranchDateFunc = (req, res) => {
    let LocalBranchDate = req.params.inBranchDate;
    let LocalFromRepo = GetBranchDateFuncRepo({ inBranchDate: LocalBranchDate });
    res.json(LocalFromRepo);
};
let GetBranchTodayFunc = (req, res) => {
    let LocalBranchToday = req.params.inBranchToday;
    let LocalFromRepo = GetBranchTodayFuncRepo({ inBranchToday: LocalBranchToday });
    res.json(LocalFromRepo);
};

let GetDateFunc = (req, res) => {
    let LocalDate = req.params.inDate;
    let LocalFromRepo = GetDateFuncRepo({ inDate: LocalDate });
    res.json(LocalFromRepo);
};
let GetTodayFunc = (req, res) => {
    let LocalFromRepo = GetTodayFuncRepo();
    res.json(LocalFromRepo);
};


export {
    GetIdWithTableFunc, GetHomeFunc, GetBranchNameFunc,
    GetBranchDateFunc, GetBranchTodayFunc,
    GetDateFunc, GetTodayFunc
};