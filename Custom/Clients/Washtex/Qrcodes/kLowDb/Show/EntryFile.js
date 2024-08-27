import { StartFunc as StartFuncCommonFuncs } from '../../../../../../bin/QrCodes/Generate/kLowDb/CommonFuncs/ReturnDbObject.js';

const StartFuncForBookings = () => {
    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();
    dbForQrCodes.read();
    LocalReturnData.JsonData = dbForQrCodes.data;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFuncForBookings };