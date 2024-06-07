import { StartFunc as StartFuncCheckCookie } from "./CheckCookie.js";
import { StartFunc as StartFuncSetFocus } from "./SetFocus.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";

const StartFunc = ({ inSuccessFunc }) => {

    if (StartFuncCheckCookie() === false) {
        StartFuncSetFocus();
    };
    StartFuncAddListeners({ inSuccessFunc });
};

export { StartFunc };