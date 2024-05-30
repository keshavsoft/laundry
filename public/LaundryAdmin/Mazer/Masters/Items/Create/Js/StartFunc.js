import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/SaveButtonClickId/ButtonClickFunc.js";
import { StartFunc as  ShowItemList} from "../../Js/ShowItemList.js";

const StartFunc = () => {
    StartFuncButtonClickFunc();
    ShowItemList();
};

StartFunc();