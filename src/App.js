import { PaginatedReactTable } from 'paginated-react-table'
import EmployeeCreation from './EmployeeCreation'
import { tableTitleDefault, headersArrayDefault, dataArrayDefault } from './mockData'
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
    <>
      <EmployeeCreation onEmployeeCreation={handleCreateEmployee}/>
      <PaginatedReactTable tableTitle={tableTitleDefault} headersArray={headersArrayDefault} dataArray={dataArray} />
    </>
  )
}

export default App
