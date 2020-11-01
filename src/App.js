// App.js
import React from 'react';
import './App.css';
import BasicTableComponent from './components/basicTable';
import FilterTableComponent from './components/filterTable';
import PaginationTableComponent from './components/paginationTable';
import SortingTableComponent from './components/sortTable';
import SelfTable from './components/selfTable';
import CombinedTableComponent from './components/pgstTable';
import CombinedCssTableComponent from './components/pgstcss';
import UsersList from './complete/js/UsersList';
function App() {

  return (
    <div className="App">

      {/* <h3>Basic Table using <code>react-table</code></h3>

      <BasicTableComponent />

      <h3>Filter Table using <code>react-table</code></h3>

      <FilterTableComponent />

      <h3>Table with Pagination using <code>react-table</code></h3>

      <PaginationTableComponent />

      <h3>Sorting on Table using <code>react-table</code></h3>

      <SortingTableComponent />

      <h3>Table using <code>react</code></h3>

      <SelfTable /> */}

      <h3>Combined Features Table using <code>react-table</code></h3>

      <UsersList />
    </div>
  );
}

export default App;






