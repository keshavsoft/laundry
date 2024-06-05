import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';
import { PostFuncWithMail as PostFuncRepoWithMail } from '../../repos/postFuncs/EntryFile.js';

let PostFunc = async (req, res) => {
    let LocalData = req.body;

    let LocalUsername = LocalData.UserName;
    let LocalPassword = LocalData.Password;

    let LocalFromRepo = await PostFuncRepo({ inUsername: LocalUsername, inPassword: LocalPassword });

    if (LocalFromRepo.KTF === false)  res.status(401).json(LocalFromRepo);

    res.json(LocalFromRepo);

};

let PostFuncWithMail = async (req, res) => {
    let LocalData = req.body;

    let LocalUsername = LocalData.UserName;
    let LocalPassword = LocalData.Password;
    let LocalMail = LocalData.Mail

    let LocalFromRepo = await PostFuncRepoWithMail({ inUsername: LocalUsername, inPassword: LocalPassword, inMail: LocalMail });

    if (LocalFromRepo.KTF === false)  res.status(401).json(LocalFromRepo);

    res.json(LocalFromRepo);
};

export { PostFunc, PostFuncWithMail };