import { StartFunc as StartFuncAddOnButton } from "./AddOnButton.js";
import { StartFunc as StartFuncDeleteButton } from "./DeleteButton.js";

const StartFunc = (row, $element, field) => {
    if (field === 3) {
        StartFuncAddOnButton({ inRow: row });
    };

    if (field === 9) {
        StartFuncDeleteButton({ inRow: row });
    };
};
export { StartFunc };