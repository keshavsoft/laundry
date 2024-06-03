let StartFunc = ({ inSuccessFunc }) => {
    // document.cookie = `KSToken = ${inToken}`;
    console.log("In StartFunc", inSuccessFunc);
    inSuccessFunc().then();
};

export { StartFunc }