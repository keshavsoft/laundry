
let StartFunc = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow;

    jFLocalHideSpinner();
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: LocalDataToShow,
    });
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }