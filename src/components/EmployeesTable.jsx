import { PaginatedReactTable } from 'paginated-react-table'
import React, { useContext } from 'react'
import { DataArrayContext } from '../context/DataArrayContext'
import { headersArrayDefault, tableTitleDefault } from '../utils/mockData'

function EmployeesTable() {
    const {dataArray} = useContext(DataArrayContext)

    return (
        <PaginatedReactTable tableTitle={tableTitleDefault} headersArray={headersArrayDefault} dataArray={dataArray} />
    )
}

export default EmployeesTable