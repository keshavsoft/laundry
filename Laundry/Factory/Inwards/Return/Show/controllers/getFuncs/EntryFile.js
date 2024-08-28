import {
    GetFunc as GetFuncRepo, GetDataOnlyFunc as GetDataOnlyFuncRepo,
    GetImagesFunc as GetImagesFuncRepo,
    GetBodyCheckFunc as GetBodyCheckFuncRepo,
    GetFromModalFunc as GetFromModalFuncRepo,
    GetFromModalUuidFunc as GetFromModalUuidFuncRepo,
    GetWithJoinsFunc as GetWithJoinsFuncRepo,
    GetDataSortByColumnFunc as GetDataSortByColumnFuncRepo,
    GetRowDataFunc as GetRowDataFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalFromRepo = await GetFuncRepo();

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);

};

let GetRowDataFunc = async (req, res) => {
    let localid = req.params.id
    let LocalFromRepo = await GetRowDataFuncRepo({ inId: localid });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetDataOnlyFunc = async (req, res) => {
    let LocalFromRepo = await GetDataOnlyFuncRepo();

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetDataSortByColumnFunc = async (req, res) => {
    let LocalFromRepo = await GetDataSortByColumnFuncRepo();

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetImagesFunc = async (req, res) => {
    let LocalFromRepo = await GetImagesFuncRepo();

    res.status(200).send(JSON.stringify(LocalFromRepo));

};

let GetBodyCheckFunc = async (req, res) => {
    let LocalFromRepo = await GetBodyCheckFuncRepo();

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetFromModalFunc = async (req, res) => {
    let LocalFromRepo = await GetFromModalFuncRepo();

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetFromModalUuidFunc = async (req, res) => {
    let LocalFromRepo = await GetFromModalUuidFuncRepo();

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

let GetWithJoinsFunc = async (req, res) => {
    let LocalFromRepo = await GetWithJoinsFuncRepo();

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};

export {
    GetFunc, GetDataOnlyFunc, GetImagesFunc, GetBodyCheckFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetWithJoinsFunc, GetDataSortByColumnFunc, GetRowDataFunc
};