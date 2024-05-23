import { StartFunc as StartFuncItemsOnModalTable } from "./ItemsOnModalTable/EntryFile.js";
import { StartFunc as StartFuncItemsWithSearchOnModalTable } from "./ItemsWithSearchOnModal/EntryFile.js";

const StartFunc = () => {
    // let jVarLocalModalId = "ItemsOnModal";
    let jFLocalFilter = document.getElementById("TableFooterItemNameId").value;
    if(jFLocalFilter) {
        StartFuncItemsWithSearchOnModalTable(jFLocalFilter);
        //console.log(jFLocalFilter);
    }
    else {
        StartFuncItemsOnModalTable();
    }
};

export { StartFunc };
