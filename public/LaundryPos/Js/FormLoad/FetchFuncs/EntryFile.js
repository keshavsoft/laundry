import { StartFunc as StartFuncBeforeFetch } from "./BeforeFetch/EntryFile.js";
import { StartFunc as StartFunPostFetch } from "./PostFetch/EntryFile.js";


let StartFunc = async () => {
    let Data = await StartFuncBeforeFetch();
    let BranchNames = await StartFunPostFetch(Data.JsonData);
    console.log("bhhh",BranchNames);
    var selectElement = document.getElementById("BranchSelectId");
    for (var i = 0; i < BranchNames.length; i++) {
        var option = document.createElement("option");
        option.value = BranchNames[i];
        option.textContent = BranchNames[i];
        selectElement.appendChild(option);
    }
};


export { StartFunc };