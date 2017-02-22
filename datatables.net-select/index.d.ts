// Type definitions for datatables.net-select
// Project: https://datatables.net/extensions/select/
// Definitions by: Jared Szechy <https://github.com/szechyjs>, Steven Liekens <https://github.com/StevenLiekens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    type SelectStyle = 'api' | 'single' | 'multi' | 'os' | 'multi+shift';

    type SelectItems = 'row' | 'column' | 'cell';

    interface Settings {
        /*
         * Select extension options
         */
        select?: boolean | SelectStyle | SelectSettings;
    }

    interface SelectSettings {
        /*
         * Indicate if the selected items will be removed when clicking outside of the table
         */
        blurable?: boolean;

        /*
         * Set the class name that will be applied to selected items
         */
        className?: string;

        /*
         * Enable / disable the display for item selection information in the table summary
         */
        info?: boolean;

        /*
         * Set which table items to select (rows, columns or cells)
         */
        items?: SelectItems;

        /*
         * Set the element selector used for mouse event capture to select items
         */
        selector?: string;

        /*
         * Set the selection style for end user interaction with the table
         */
        style?: SelectStyle;
    }

    interface CellMethods {
        deselect(): Api;
        select(): Api;
    }

    interface CellsMethods {
        deselect(): Api;
        select(): Api;
    }

    interface ColumnMethods {
        deselect(): Api;
        select(): Api;
    }

    interface ColumnsMethods {
        deselect(): Api;
        select(): Api;
    }

    interface RowMethods {
        deselect(): Api;
        select(): Api;
    }

    interface RowsMethods {
        deselect(): Api;
        select(): Api;
    }

    interface Select {
        (): Api;
        blurable(): boolean;
        blurable(flag: boolean): Api;
        info(): boolean;
        info(flag: boolean): Api;
        items(): SelectItems;
        items(set: SelectItems): Api;
        selector(): string;
        selector(set: string): Api;
        style(): SelectStyle;
        style(set: SelectStyle): Api;
    }

    interface Api {
        select: Select;
    }

    interface ObjectSelectorModifier {
        selected?: boolean;
    }
}
