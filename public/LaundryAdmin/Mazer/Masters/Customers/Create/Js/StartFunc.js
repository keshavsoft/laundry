import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/SaveButtonClickId/ButtonClickFunc.js";
import { StartFunc as ShowMobileList  } from "../../Js/ShowMobileList.js";
import { StartFunc as ShowCustomerList  } from "../../Js/ShowCustomerList.js";

const StartFunc = () => {
    StartFuncButtonClickFunc();
    ShowMobileList();
    ShowCustomerList();
};

StartFunc();