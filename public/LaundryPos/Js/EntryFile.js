import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";
import { StartFunc as StartFuncOnFormLoad } from "./FormLoad/EntryFile.js";

const StartFunc = () => {
    StartFuncAddListeners();
    StartFuncOnFormLoad();
};

StartFunc();