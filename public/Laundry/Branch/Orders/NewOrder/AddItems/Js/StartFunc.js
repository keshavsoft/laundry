// import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncShowToDom } from "./ShowToDom/EntryFile.js";
import { StartFunc as StartFuncLoginCheck } from "/Laundry/Js/LoginModal/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalFromAdmin = await StartFuncLoginCheck({ inSuccessFunc: StartFuncShowToDom});

    if (jVarLocalFromAdmin) {
        await StartFuncFormLoad();

        StartFuncShowToDom();
    };
};

StartFunc().then();