import { PaginatedReactTable } from 'paginated-react-table'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { DataArrayContext } from '../context/DataArrayContext'
import { headersArrayDefault, tableTitleDefault } from '../utils/mockData'

function EmployeesTable() {
    const {dataArray} = useContext(DataArrayContext)

    useEffect(() => {
        document.title = 'HRnet - Employees'
    }, [])

    return (
        <div className='employees-table__container'>
            <PaginatedReactTable tableTitle={tableTitleDefault} headersArray={headersArrayDefault} dataArray={dataArray} />
        </div>
    )
}

export default EmployeesTable