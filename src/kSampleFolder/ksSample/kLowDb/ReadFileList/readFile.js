import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';

let StartFunc = ({inDataPk}) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs({inDataPk});
    db.read();

    LocalReturnData.JsonData = db.data;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };