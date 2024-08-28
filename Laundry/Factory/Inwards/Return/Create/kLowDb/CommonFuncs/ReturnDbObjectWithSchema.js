import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../../Config.json' assert { type: 'json' };
import tableNameJson from '../../../tableName.json' assert { type: 'json' };

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${tableNameJson.folderName}/${tableNameJson.fileName}`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);

    return {
        dbObject: db,
        TableSchema: LocalFuncForTableSchema()
    };
};

let LocalFuncForTableSchema = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    let LocalFirstLevelFolders = Configjson.jsonConfig.tableAndColumns.children.find(element => {
        return "children" in element && element.name === tableNameJson.folderName;
    });

    let LocalSecondNeeded = LocalFirstLevelFolders.children.find(element => {
        return "children" in element === false && element.name === tableNameJson.fileName;
    });

    return LocalSecondNeeded;
};

export { StartFunc };
