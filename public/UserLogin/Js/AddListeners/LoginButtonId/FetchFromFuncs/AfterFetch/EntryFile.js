let StartFunc = (inData) => {
    let jVarLocalData = inData;
    jFLocalFunc({ inData: jVarLocalData });
};

let jFLocalFunc = ({ inData }) => {
    let jVarLocalData = inData;
    console.log("jVarLocalData:",jVarLocalData);

};




export { StartFunc };