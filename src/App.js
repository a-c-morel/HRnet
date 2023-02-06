import { PaginatedReactTable } from 'paginated-react-table'
import EmployeeCreation from './EmployeeCreation'
import { tableTitleDefault, headersArrayDefault, dataArrayDefault } from './mockData'

function App() {
  return (
    <>
      <EmployeeCreation />
      <PaginatedReactTable tableTitle={tableTitleDefault} headersArray={headersArrayDefault} dataArray={dataArrayDefault} />
    </>
  )
}

export default App
