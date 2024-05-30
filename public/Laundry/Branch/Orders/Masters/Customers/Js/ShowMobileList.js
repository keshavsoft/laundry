const StartFunc = () => {
    let jVarLocalCustomersFromLocslstroge = localStorage.getItem("CustomerNames");
    let LocaCustomerData = JSON.parse(jVarLocalCustomersFromLocslstroge);
    let customerArray = Object.values(LocaCustomerData);
    let mobileArray = customerArray.map(customer => customer.Mobile);
    const Mobile = "MobileDataListId";
    jFLocalStartFunc(mobileArray,Mobile);

};
let jFLocalStartFunc = (inDataAsArray, inHtmlSelectId) => {
    let LocalinHtmlSelectId = inHtmlSelectId;
    let LocalDataAsArray = inDataAsArray;

    var selectElement = document.getElementById(LocalinHtmlSelectId);

    for (var i = 0; i < LocalDataAsArray.length; i++) {
        var option = document.createElement('option');
        option.value = LocalDataAsArray[i];
        option.textContent = LocalDataAsArray[i];
        selectElement.appendChild(option);
    };
}
export { StartFunc };