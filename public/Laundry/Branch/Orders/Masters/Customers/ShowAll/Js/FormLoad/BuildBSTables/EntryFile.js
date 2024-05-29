const StartFunc = () => {
    jFLocalToTableTag();
    jFPrepareColumns();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        sortName: 'Mobile',
        sortOrder: 'asc'
    });
};

const jFLocalToTableTag = () => {
    var $table = $('#table');
    const tableAttributes = {
        "data-show-columns": "true",
        "data-search": "true",
        "data-search-highlight": "true",
        "data-searchable": "true",
        "data-show-columns-toggle-all": "true",
        "data-minimum-count-columns": "3",
        "data-id-field": "pk"
    };

    $table.attr(tableAttributes);
};

const jFPrepareColumns = () => {
    jFPrepareMobile();
    jFPrepareCustomerName();
    jFPrepareCity();

};

const jFPrepareMobile = () => {
    var $mobile = $('#MobileId');
    const mobileAttributes = {
        "data-field": "Mobile",
        "data-sortable": "true",
        "data-sort-name": "Mobile",
        "data-sort-order": "desc"
    };
    $mobile.attr(mobileAttributes);
    $mobile.addClass("d-none d-sm-table-cell");
};

const jFPrepareCustomerName = () => {
    var $CustomerName = $('#CustomerNameId');
    const CustomerNameAttributes = {
        "data-field": "CustomerName",
        "data-sortable": "true",
        "data-sort-name": "CustomerName",
        "data-sort-order": "desc"
    };
    $CustomerName.attr(CustomerNameAttributes);
    $CustomerName.addClass("d-none d-sm-table-cell");
};

const jFPrepareCity = () => {
    var $City = $('#CityId');
    const CityAttributes = {
        "data-field": "City",
        "data-sortable": "true",
        "data-sort-name": "City",
        "data-sort-order": "desc"
    };
    $City.attr(CityAttributes);
    $City.addClass("d-none d-sm-table-cell");
};

export { StartFunc };
