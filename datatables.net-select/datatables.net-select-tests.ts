/// <reference types="jquery" />
/// <reference types="datatables.net" />

$(document).ready(function () {

    var config: DataTables.Settings = {
        // Select extension options
        select: {
            blurable: true,
            className: "selectClass",
            info: true,
            items: "row",
            selector: "td:first-child",
            style: "os"
        }
    };

    var dt = $('#example').DataTable(config);
    dt.cell().deselect();
    dt.cell().select();
    dt.cells().deselect();
    dt.cells().select();
    dt.column().deselect();
    dt.column().select();
    dt.columns().deselect();
    dt.columns().select();
    dt.row().deselect();
    dt.row().select();
    dt.rows().deselect();
    dt.rows().select();
    dt.select();
    dt.select.blurable();
    dt.select.blurable(true);
    dt.select.blurable(false);
    dt.select.info();
    dt.select.info(true);
    dt.select.info(false);
    dt.select.items();
    dt.select.items('cell');
    dt.select.items('row');
    dt.select.items('column');
    dt.select.selector();
    dt.select.selector('td:first-child');
    dt.select.style();
    dt.select.style('api');
    dt.select.style('multi');
    dt.select.style('multi+shift');
    dt.select.style('os');
    dt.select.style('single');
});
