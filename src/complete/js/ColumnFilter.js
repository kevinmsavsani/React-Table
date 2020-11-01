import { Status } from "./Status";
import { Age } from "./Age";

export function ColumnFilter({
    column: { filterValue, preFilteredRows, setFilter, Header },
}) {
    const count = preFilteredRows.length

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