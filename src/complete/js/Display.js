import React from "react";
import { useTable, usePagination, useSortBy, useFilters} from 'react-table';

import { ColumnFilter } from "./ColumnFilter";
import { Table } from "./Table";
import { Paginator } from "./Paginator";
import "../styles/Display.css";

export function Display({columns, data}) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        nextPage,
        previousPage,
        pageOptions,
        pageCount,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({
                columns,
                data,
                initialState: { pageIndex: 0, pageSize: 3 },
            },
            useFilters,
            useSortBy,
            usePagination
    );

    return (
        <div>
            <div className="headerDropdown">
                <ColumnFilter column={headerGroups[0].headers[2]} />
                <ColumnFilter column={headerGroups[0].headers[4]} />
            </div>

            <Table getTableBodyProps={getTableBodyProps} headerGroups={headerGroups} prepareRow={prepareRow}
                page={page} getTableProps={getTableProps}/>

            <Paginator canPreviousPage={canPreviousPage} canNextPage={canNextPage} nextPage={nextPage}
                previousPage={previousPage} pageOptions={pageOptions} pageIndex={pageIndex}/>
        </div >
    )
}
