import { FilterDataFrombodyFunc as FilterDataFrombodyFuncRepo } from '../../repos/postFuncs/EntryFile.js';

let FilterDataFrombodyFunc = (req, res) => {
    let LocalBodyFindValue = req.body.FindValue
    let LocalBranchName = req.body.BranchName;

    let LocalFromRepo = FilterDataFrombodyFuncRepo({
        inFindValue: LocalBodyFindValue, inBranchName: LocalBranchName
    });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

export { FilterDataFrombodyFunc };