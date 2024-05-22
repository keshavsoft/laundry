import { StartFunc as StartFuncItemsOnModalTable } from "./ItemsOnModalTable/EntryFile.js";

const StartFunc = () => {
    let jVarLocalModalId = "ItemsOnModal";

    StartFuncItemsOnModalTable();
    // var $table = $(document.getElementById(jVarLocalModalId).querySelector("table"));
    // $table.bootstrapTable({
    //     data: jFLocalFromLocalStorage(),
    //     onClickRow: jFLocalOnClickRow
    // });

    $(`#${jVarLocalModalId}`).modal("show");
};

const jFLocalOnClickRow = (row, $element, field) => {

    console.log("aaaaaaaaaa : ", row, $element, field);
};

const jFLocalFromLocalStorage = () => {
    let jVarLocalDataFromLocalStorage = localStorage.getItem("ItemNames");
    let jVarLocalDataFromLocalStorageJson = JSON.parse(jVarLocalDataFromLocalStorage);

    return jVarLocalDataFromLocalStorageJson;
};

export { StartFunc };
