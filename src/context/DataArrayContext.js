import React, { createContext, useState, useEffect } from 'react'
import { dataArrayDefault } from '../utils/mockData'

export const DataArrayContext = createContext()

const DataArrayContextProvider = props => {

    const [dataArray, setDataArray] = useState(dataArrayDefault)

    const handleCreateEmployee = (newEmployee) => {
        console.log(dataArray)
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
        <DataArrayContext.Provider value={{handleCreateEmployee, dataArray}}>
             {props.children}
        </DataArrayContext.Provider>
    )
}

export default DataArrayContextProvider