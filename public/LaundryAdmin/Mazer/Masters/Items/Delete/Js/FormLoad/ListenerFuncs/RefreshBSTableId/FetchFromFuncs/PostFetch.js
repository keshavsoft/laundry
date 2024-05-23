let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/Masters/Items/DataOnly`
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };