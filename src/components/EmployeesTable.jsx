import { PaginatedReactTable } from 'paginated-react-table'
import { useContext, useEffect } from 'react'
import { DataArrayContext } from '../context/DataArrayContext'

function EmployeesTable() {
    
    const {dataArray} = useContext(DataArrayContext)
    const tableTitle = "Current Employees"
    const headersArray = [
        "First Name",
        "Last Name",
        "Start Date",
        "Department",
        "Date of Birth",
        "Street",
        "City",
        "State",
        "Zip Code"
    ]

    useEffect(() => {
        document.title = 'HRnet - Employees'
    }, [])

    return (
        <div className='employees-table__container'>
            <PaginatedReactTable tableTitle={tableTitle} headersArray={headersArray} dataArray={dataArray} />
        </div>
    )
}

export default EmployeesTable