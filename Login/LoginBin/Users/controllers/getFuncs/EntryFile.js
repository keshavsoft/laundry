import { GetFunc as GetFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {

    let LocalFromRepo = await GetFuncRepo();
    
    if (LocalFromRepo.KTF === false) return res.status(404).json({});

    res.json(LocalFromRepo.JsonData);
};

export { GetFunc };