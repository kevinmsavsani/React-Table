import React from "react";

import { useTable, usePagination, useSortBy, useFilters} from 'react-table';
import './pgstcssfilter.css';

function CombinedCssFilterTableComponent() {

    const columns = [
        {
            Header: 'First Name',
            accessor: 'firstName',
        },
        {
            Header: 'Last Name',
            accessor: 'lastName',
                
        },
        {
            Header: 'Age',
            accessor: 'age',
        },
        {
            Header: 'Visits',
            accessor: 'visits',
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
        {
            Header: 'Profile Progress',
            accessor: 'progress',
        },
    ];

    const data = [
        {
            "firstName": "committee-c15dw",
            "lastName": "editor-ktsjo",
            "age": 3,
            "visits": 46,
            "progress": 75,
            "status": "relationship"
        },
        {
            "firstName": "midnight-wad0y",
            "lastName": "data-7h4xf",
            "age": 1,
            "visits": 56,
            "progress": 15,
            "status": "complicated"
        },
        {
            "firstName": "tree-sbdb0",
            "lastName": "friendship-w8535",
            "age": 1,
            "visits": 45,
            "progress": 66,
            "status": "single"
        },
        {
            "firstName": "chin-borr8",
            "lastName": "shirt-zox8m",
            "age": 0,
            "visits": 25,
            "progress": 67,
            "status": "complicated"
        },
        {
            "firstName": "women-83ef0",
            "lastName": "chalk-e8xbk",
            "age": 9,
            "visits": 28,
            "progress": 23,
            "status": "relationship"
        },
        {
            "firstName": "women-83ef0",
            "lastName": "chalk-e8xbk",
            "age": 9,
            "visits": 28,
            "progress": 23,
            "status": "relationship"
        },
        {
            "firstName": "women-83ef0",
            "lastName": "chalk-e8xbk",
            "age": 9,
            "visits": 28,
            "progress": 23,
            "status": "relationship"
        },
        {
            "firstName": "women-83ef0",
            "lastName": "chalk-e8xbk",
            "age": 9,
            "visits": 28,
            "progress": 23,
            "status": "relationship"
        }
    ]

    return (
        <Table columns={columns} data={data} />
    )
}

function Status({
    setFilter,
    Header
}){
    return (
        <div className="dropDown">
            <text>{Header}</text>
            <select id="dropdown" onChange={e => {
                setFilter(e.target.value || undefined)
            }}>
              <option value=""></option>
              <option value="single">single</option>
              <option value="complicated">complicated</option>
              <option value="relationship">relationship</option>
            </select>
          </div>
    )
}

function Age({
    setFilter,
    Header
}){
    return (
        <div className='dropDown'>
            <text>{Header}</text>
            <select id="dropdown" onChange={e => {
                setFilter(e.target.value || undefined)
            }}>
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
    )
}

function CheckColumn({setFilter, Header}) {

    if(Header=='Status') {
        return (
        <Status setFilter={setFilter} Header={Header}/> 
        )
    } 
    if(Header=='Age') {
        return(
            <Age setFilter={setFilter} Header={Header}/> 
            )
    }

}

function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter, Header },
}) {
    const count = preFilteredRows.length

    return (
        <CheckColumn setFilter={setFilter} Header={Header}/>   
        )
}

function Table({columns, data}) {

    const defaultColumn = React.useMemo(
        () => ({
            Filter: DefaultColumnFilter,
        }),
        []
    )

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
                defaultColumn,
                initialState: { pageIndex: 0, pageSize: 3 },
            },
            useFilters,
            useSortBy,
            usePagination
    );

    return (
        <div>
            <div className="headerDropdown">
                <DefaultColumnFilter column={headerGroups[0].headers[2]} />
                <DefaultColumnFilter column={headerGroups[0].headers[4]} />
            </div>

            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                // Add the sorting props to control sorting. For this example
                                // we can add them into the header props
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {/* Add a sort direction indicator */}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' ▼ '
                                                : ' ▲ '
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {/* 
                Pagination can be built however you'd like. 
                This is just a very basic UI implementation:
            */}
            <ul className="pagination">
                    {   pageIndex>0 ? (
                        <a className="page-change" onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</a>
                    ) : <a className="disabled" onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</a>
                    }
                    {pageIndex>0 ? (
                        <a className="page-links" onClick={() => previousPage()} disabled={!canPreviousPage}>{pageIndex}</a>
                    ) : null}
                    <a className="page-links" class="active">{pageIndex + 1}</a>
                    {pageIndex<pageOptions.length-1 ? (
                        <a className="page-links" onClick={() => nextPage()} disabled={!canNextPage}>{pageIndex + 2}</a>
                    ) : null}
                    {pageIndex<pageOptions.length-1 ? (
                    <a className="page-change" onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</a>
                    ) :  <a className="disabled" onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</a>
                }
            </ul>
        </div >
    )
}

export default CombinedCssFilterTableComponent;