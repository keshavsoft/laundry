import { StartFunc as StartFuncForeignKeyCheck } from "./ForeignKeyCheck.js";

let StartFunc = ({ inTableSchema, inDataToInsert }) => {
    let LocalReturnData = { KTF: true, JSONFolderPath: "", CreatedLog: {} };
    const LocalTableSchema = inTableSchema;
    let LocalKeysNeeded = {};

    for (const prop in LocalTableSchema.fileData) {
        if ("references" in LocalTableSchema.fileData[prop]) {
            LocalKeysNeeded[prop] = LocalTableSchema.fileData[prop];
        };
    };

    if ((Object.keys(LocalKeysNeeded).length === 0) === false) {
        return LocalFuncTrue({ inKeysNeeded: LocalKeysNeeded, inDataToInsert });
    };

    return LocalReturnData;
};


let LocalFuncTrue = ({ inKeysNeeded, inDataToInsert }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalKeysNeeded = inKeysNeeded;

    let LocalKeyNeeded = Object.keys(LocalKeysNeeded)[0];
    let LocalValueNeeded = inDataToInsert[LocalKeyNeeded];

    let LocalK1 = Object.values(LocalKeysNeeded)[0].references;
    let LocalDataNeeded = StartFuncForeignKeyCheck({
        inFileName: LocalK1.model.tableName,
        inKey: LocalK1.key, NeededKey: LocalValueNeeded
    });

    if (LocalDataNeeded.KTF === false) {
        LocalReturnData.KReason = LocalDataNeeded.KReason;
        return LocalReturnData;
    };
    LocalReturnData.KTF = true
    return LocalReturnData;
};

export { StartFunc };