import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";
import { StartFunc as StartFuncOnFormLoad } from "./FormLoad/EntryFile.js";
// import { StartFunc as StartFuncLoginCheck } from "./LoginCheck/EntryFile.js";
// import { StartFunc as StartFuncLoginCheck } from "/LaundryAdmin/Js/LoginModal/EntryFile.js";
import { StartFunc as StartFuncLoginCheck } from "/Laundry/Js/LoginModal/EntryFile.js";

const StartFunc = async () => {
    StartFuncAddListeners();

    let jVarLocalFromAdmin = await StartFuncLoginCheck({ inSuccessFunc: StartFuncOnFormLoad });
    
    console.log("StartFuncLoginCheck",StartFuncLoginCheck);

    if (jVarLocalFromAdmin === false) {
        return await false;
    };

    StartFuncOnFormLoad();

};

StartFunc().then();