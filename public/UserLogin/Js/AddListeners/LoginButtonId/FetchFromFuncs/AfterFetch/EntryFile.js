let StartFunc = async ({ Status }) => {
    let LocalStatus = Status;

    if (LocalStatus.status === 200) {
        jFLocalModalClose();
    }
    if (LocalStatus.status === 401) {
        jFLocalModalInputFocus();
    }
};

let jFLocalModalClose = () => {
    let jVarLocalUsernameId = document.getElementById('UserId');

    const loginModalElement = document.getElementById('LoginModalId');
    const myModalAlternative = bootstrap.Modal.getInstance(loginModalElement);
    if (myModalAlternative) {
        myModalAlternative.hide();
    };
    jVarLocalUsernameId.focus();
    // window.location.href = "";
};

let jFLocalModalInputFocus = () => {
    let jVarLocalUsernameId = document.getElementById('UsernameId');
    let jVarLocalPasswordId = document.getElementById('PasswordId');
    jVarLocalUsernameId.classList.add("is-invalid");
    jVarLocalPasswordId.classList.add("is-invalid");
};




export { StartFunc };