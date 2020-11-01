import "../styles/Paginator.css"

export function Paginator({
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    pageIndex,
}){
    {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
    */}
    return (
        <div>
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
        </div>
    )
}
