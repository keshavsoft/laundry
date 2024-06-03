import UrlJson from './Url.json' with {type: 'json'};
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalFetchUrl = UrlJson.GetUrl;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };