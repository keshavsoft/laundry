import { StartFunc as StartFuncPostFetch } from "./PostFetch/Entry.js";

const StartFunc = async () => {
    let jVarLoaclFromFetch = await StartFuncPostFetch();

    // if (jVarLocalFromAdmin) {
    //     StartFuncFormLoad();
    //     StartFuncShowOnDom();
    // };

    return await jVarLoaclFromFetch;
};

export {StartFunc};