import { Routes, Route } from "react-router-dom"
import { PaginatedReactTable } from 'paginated-react-table'
import EmployeeCreation from './components/EmployeeCreation'
import { tableTitleDefault, headersArrayDefault, dataArrayDefault } from './utils/mockData'
import { useEffect, useState } from "react"

function App() {
  const [dataArray, setDataArray] = useState(dataArrayDefault)

  const handleCreateEmployee = (newEmployee) => {
    let localData = []
    if (localStorage.getItem("employeeData")) {
      localData = JSON.parse(localStorage.getItem('employeeData'))
    }
    localData.push(newEmployee)
    localStorage.setItem('employeeData', JSON.stringify(localData))
    setDataArray(localData)
  }

  useEffect(() => {
    if (localStorage.getItem("employeeData")) {
      setDataArray(JSON.parse(localStorage.getItem("employeeData")))
    }
  }, [])
  

  return (
    <Routes>
      <Route path="/" element={ <EmployeeCreation onEmployeeCreation={handleCreateEmployee}/> } />
      <Route path="/employees" element={ <PaginatedReactTable tableTitle={tableTitleDefault} headersArray={headersArrayDefault} dataArray={dataArray} /> }/>
    </Routes>
  )
}

export default App
