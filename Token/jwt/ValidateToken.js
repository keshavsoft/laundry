import jwt from 'jsonwebtoken';

let StartFunc = ({ inToken }) => {
    try {
        let jVarTokenInfo = jwt.verify(inToken, 'shhhhh');
        return jVarTokenInfo;
    }
    catch (err) {
        return err;
    }
}

export { StartFunc };