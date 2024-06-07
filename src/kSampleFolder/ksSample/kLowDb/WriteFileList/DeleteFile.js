import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObjectFromPk.js';

let StartFunc = async ({ inId, inDataPk }) => {
  let LocalId = inId;

  const db = StartFuncCommonFuncs({ inDataPk });
  db.read();
  let LocalarrayOfObjects = db.data;

  const LocalFindId = LocalarrayOfObjects.find((obj) => obj.pk == LocalId);

  if (LocalFindId === undefined) {
    return await { KTF: false, KReason: "Id not found in data" };
  }

  let LocalArrayAfterDelete = deleteObjectById({
    inCollection: LocalarrayOfObjects,
    inId: LocalId,
  });

  db.data = LocalArrayAfterDelete;
  db.write();

  return await true;
};

let deleteObjectById = ({ inCollection, inId }) => {
  let LocalCollection = inCollection;
  let LocalId = inId;

  LocalCollection.splice(
    LocalCollection.findIndex((a) => a.pk == LocalId),
    1
  );

  return LocalCollection;
};

export { StartFunc };
