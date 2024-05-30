import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/SaveButtonClickId/ButtonClickFunc.js";
import { StartFunc as  ShowAddOns} from "../../Js/ShowAddOns.js";

const StartFunc = () => {
    StartFuncButtonClickFunc();
    ShowAddOns();
};

StartFunc();