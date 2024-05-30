import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/SaveButtonClickId/ButtonClickFunc.js";
import { StartFunc as ShowMobileList  } from "../../Js/ShowMobileList.js";


const StartFunc = () => {
    StartFuncButtonClickFunc();
    ShowMobileList();
};

StartFunc();