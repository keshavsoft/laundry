import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';
import { StartFunc as StartFuncCreateToken } from "../../../../../../Token/jwt/CreateToken.js";

let PostFunc = async (req, res) => {
    let LocalData = req.body;

    let LocalUsername = LocalData.UserName;
    let LocalPassword = LocalData.Password;

    let LocalFromRepo = await PostFuncRepo({ inUsername: LocalUsername, inPassword: LocalPassword });
    // console.log("data:",LocalFromRepo);

    if ( LocalFromRepo.KTF) {
        let jVarLocalToken = StartFuncCreateToken({inObject : LocalFromRepo});
        //console.log("jVarLocalToken",jVarLocalToken);
    }
    res.json(LocalFromRepo);
};

export { PostFunc };