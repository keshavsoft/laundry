import { StartFunc as StartFuncReturnCustomersDbObject } from '../CommonFuncs/ReturnCustomersDbObject.js';

const StartFunc = ({ inDataToInsert }) => {
    let LocalinDataToInsert = inDataToInsert;
    let LocalCustomerMobile = LocalinDataToInsert.CustomerData.CustomerMobile;

    const db = StartFuncReturnCustomersDbObject();
    db.read();

    if ("error" in db.data) {
        return db.data;
    };
    let LocalFindData = db.data.find(element => element.Mobile === LocalCustomerMobile);
    let CustomerObj = {};
    CustomerObj.CustomerName = LocalFindData?.CustomerName || "";
    CustomerObj.CustomerMobile = LocalFindData?.Mobile || "";
    CustomerObj.DOB = LocalFindData?.DOB || "";
    CustomerObj.City = LocalFindData?.City || "";
    CustomerObj.GSTNumber = LocalFindData?.GSTNumber || "";
    return CustomerObj;
};

export { StartFunc };