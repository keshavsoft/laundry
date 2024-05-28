// import { GetIdFunc as GetIdFuncRepo } from '../../repos/getFuncs/EntryFile.js';
import { GetIdWithTableFunc as GetIdWithTableFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetIdWithTableFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalinTableFromParam = LocalParams.inTable;
    let LocalIdFromParam = LocalParams.id;

    let LocalFromRepo = await GetIdWithTableFuncRepo({ inTable: LocalinTableFromParam, inId: LocalIdFromParam });
    res.json(LocalFromRepo);
};

export { GetIdWithTableFunc };