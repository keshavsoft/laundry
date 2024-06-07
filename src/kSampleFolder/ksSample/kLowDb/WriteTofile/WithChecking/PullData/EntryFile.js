import { StartFunc as StartFuncReturnDbObjectWithSchemaFromPk } from '../../../CommonFuncs/ReturnDbObjectWithSchemaFromPk.js';

let StartFunc = ({inDataPk}) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const dbFromDbObjectWithSchema = StartFuncReturnDbObjectWithSchemaFromPk({inDataPk});

    const db = dbFromDbObjectWithSchema.dbObject;

    db.read();

    if ("error" in db.data) {
        return db.data;
    };

    if (Array.isArray(db.data) === false) {
        LocalReturnData.KReason = "Not array inside Json file...";

        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    LocalReturnData.inDb = db
    LocalReturnData.inTableSchema = dbFromDbObjectWithSchema.TableSchema

    return LocalReturnData;
};

export { StartFunc };