import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
let StartFunc = async () => {
    let jvarLocalHeader = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/Custom/Clients/Washtex/Orders/Today/WithQrCode`;
    let response = await fetch(jVarLocalFetchUrl,jvarLocalHeader);
    let data = await response.json();

    return await data;
};


export { StartFunc };