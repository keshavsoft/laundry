import { GetFunc as GetFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {

    let LocalFromRepo = await GetFuncRepo();
    
    if (LocalFromRepo.KTF){
        res.json(LocalFromRepo.JsonData);
    }
};

export { GetFunc };