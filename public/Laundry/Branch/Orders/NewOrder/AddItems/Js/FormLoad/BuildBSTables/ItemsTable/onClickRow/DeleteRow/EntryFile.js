import { StartFunc as StartFuncDeleteFetch } from "./DeleteFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

const StartFunc = async ({inRowpk, inItemSerial}) => {
    // let responce = await StartFuncDeleteFetch(row);
    // StartFuncAfterFetch({ inResponce: responce })
    console.log("Row::",inRowpk);
    console.log("ItemSerial::",inItemSerial);
};

export { StartFunc };