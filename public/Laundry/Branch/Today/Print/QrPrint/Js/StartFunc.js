// import { StartFunc as StartFuncLoginCheck } from "./LoginCheck/EntryFile.js";
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncLoginCheck } from "/LaundryAdmin/Js/LoginModal/EntryFile.js";


const StartFunc = async () => {
    // let jVarLocalFromAdmin = await StartFuncLoginCheck();;
    let jVarLocalFromAdmin = await StartFuncLoginCheck({ inSuccessFunc: StartFuncShowOnDom});
    console.log("jVarLocalFromAdmin",jVarLocalFromAdmin);


    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();

        StartFuncShowOnDom({}).then();
    };
};

StartFunc();