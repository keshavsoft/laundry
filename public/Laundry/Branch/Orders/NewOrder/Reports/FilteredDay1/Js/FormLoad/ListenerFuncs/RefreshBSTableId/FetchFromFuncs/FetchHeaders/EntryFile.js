import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeys = {};
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    jVarLocalBodyKeys.FindValue = date();
    jVarLocalBodyKeys.BranchName = jVarLocalBranchName;

    KeysJson.body = JSON.stringify(jVarLocalBodyKeys);

    return KeysJson;
};

let date = () => {
    // Create a new Date object for today's date
    const today = new Date();

    // Get the day, month, and year
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = today.getFullYear();

    // Format the date as "DD/MM/YYYY"
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
    console.log(formattedDate); // Outputs: "17/06/2024"
};

export { StartFunc }