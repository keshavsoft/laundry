import { StartFunc as StartFuncOnClickRow } from "./onClickRow.js";

const StartFunc = () => {
    let jVarLocalModalId = "ItemsOnModal";
        var $table = $(document.getElementById(jVarLocalModalId).querySelector("table"));
        $table.bootstrapTable({
            data: jFLocalFromLocalStorage(),
            onClickRow: StartFuncOnClickRow
        });
        $(`#${jVarLocalModalId}`).modal("show");
};

const jFLocalFromLocalStorage = () => {
    let jVarLocalDataFromLocalStorage = localStorage.getItem("ItemNames");
    let jVarLocalDataFromLocalStorageJson = JSON.parse(jVarLocalDataFromLocalStorage);
    //console.log(jVarLocalDataFromLocalStorageJson);
    return jVarLocalDataFromLocalStorageJson;
};

/* const jFLocalFromLocalStorageWithFilter = (jFLocalFilter) => {
    let jVarLocalDataFromLocalStorage = localStorage.getItem("ItemNames");
    let jVarLocalDataFromLocalStorageJson = JSON.parse(jVarLocalDataFromLocalStorage);
    
    return jVarLocalDataFromLocalStorageJson.filter(obj => obj.ItemName.toLowerCase().includes(jFLocalFilter.toLowerCase()));
}; */

export { StartFunc };
