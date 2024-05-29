import Attributes from './Attributes.json' with {type: 'json'};

const StartFunc = () => {
    jFLocalToTableTag();
    jFPrepareColumns();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable(Attributes.loadObject);
};

const jFLocalToTableTag = () => {
    var $table = $('#table');

    // const tableAttributes = {
    //     "data-show-columns": "true",
    //     "data-search": "true",
    //     "data-search-highlight": "true",
    //     "data-searchable": "true",
    //     "data-show-columns-toggle-all": "true",
    //     "data-minimum-count-columns": "3",
    //     "data-id-field": "pk"
    // };

    $table.attr(Attributes.tableAttributes);
};

const jFPrepareColumns = () => {
    jFPrepareCategory();
    jFPrepareItemName();
    jFPreparePieces();
    jFPrepareWashType();
    jFPrepareWashRate();

};

const jFPrepareCategory = () => {
    var $Category = $('#Category');

    const CategoryAttributes = {
        "data-field": "Category",
        "data-sortable": "true",
        "data-sort-name": "Category",
        "data-sort-order": "desc"
    };

    $Category.attr(CategoryAttributes);
    $Category.addClass("d-none d-sm-table-cell");
};

const jFPrepareItemName = () => {
    var $ItemName = $('#ItemName');

    const ItemNameAttributes = {
        "data-field": "ItemName",
        "data-sortable": "true",
        "data-sort-name": "ItemName",
        "data-sort-order": "desc"
    };

    $ItemName.attr(ItemNameAttributes);
    $ItemName.addClass("d-none d-sm-table-cell");
};

const jFPreparePieces = () => {
    var $Pieces = $('#Pieces');

    const PiecesAttributes = {
        "data-field": "Pcs",
        "data-sortable": "true",
        "data-sort-name": "Pcs",
        "data-sort-order": "desc",
        "data-halign":"left",
        "data-align":"right"
    };

    $Pieces.attr(PiecesAttributes);
    $Pieces.addClass("d-none d-sm-table-cell");
};

const jFPrepareWashType = () => {
    var $WashType = $('#WashType');

    const WashTypeAttributes = {
        "data-field": "Category",
        "data-sortable": "true",
        "data-sort-name": "Category",
        "data-sort-order": "desc"
    }

    $WashType.attr(WashTypeAttributes);
    $WashType.addClass("d-none d-sm-table-cell");
};

const jFPrepareWashRate = () => {
    var $DryWashRate = $('#DryWashRate');

    const DryWashRateAttributes = {
        "data-field": "DryWashRate",
        "data-sortable": "true",
        "data-sort-name": "Pcs",
        "data-sort-order": "desc",
        "data-halign":"left",
        "data-align":"right"
    };

    $DryWashRate.attr(DryWashRateAttributes);
    $DryWashRate.addClass("d-none d-sm-table-cell");
};

export { StartFunc };
