import jwt from 'jsonwebtoken';

let StartFunc = ({ inObject }) => {
    var token = jwt.sign(inObject, 'shhhhh');
    return token;
}

export { StartFunc }