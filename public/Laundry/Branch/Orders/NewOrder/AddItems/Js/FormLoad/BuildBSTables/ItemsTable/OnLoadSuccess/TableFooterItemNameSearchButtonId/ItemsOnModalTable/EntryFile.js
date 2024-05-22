import { StartFunc as StartFuncOnClickRow } from "./onClickRow.js";

const StartFunc = () => {
    let jVarLocalModalId = "ItemsOnModal";

    var $table = $(document.getElementById(jVarLocalModalId).querySelector("table"));
    $table.bootstrapTable({
        data: jFLocalFromLocalStorage(),
        onClickRow: StartFuncOnClickRow
    });
};

const jFLocalFromLocalStorage = () => {
    let jVarLocalDataFromLocalStorage = localStorage.getItem("ItemNames");
    let jVarLocalDataFromLocalStorageJson = JSON.parse(jVarLocalDataFromLocalStorage);

    return jVarLocalDataFromLocalStorageJson;
};

export { StartFunc };
