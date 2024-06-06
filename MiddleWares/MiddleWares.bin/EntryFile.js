import { StartFunc as StartFuncValidateToken } from "../../Token/jwt/ValidateToken.js";

let StartFunc = (req, res, next) => {
    let localClientToken = req.cookies.KSToken;
    let localResult = StartFuncValidateToken({ inToken: localClientToken });
    console.log("a : ", localResult);
    if (localResult === false) {
        res.status(401).send({ message: 'Unauthorized' });
        return;
    };

    //req.locals.KeshavSoft = localResult;

    next();
};

export { StartFunc };