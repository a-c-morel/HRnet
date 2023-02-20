import { createContext, useState, useEffect } from 'react'

export const DataArrayContext = createContext()

const DataArrayContextProvider = props => {

    const [dataArray, setDataArray] = useState(JSON.parse(localStorage.getItem("employeeData")))

    /**
     * Adds data to localStorage and cause dataArray to use created employees instead of mock data
     * @param {Object} newEmployee 
     * {
            firstName: '',
            lastName: '',
            startDate: '',
            department: 'Sales',
            dateOfBirth: '',
            street: '',
            city: '',
            state: 'AL',
            zipCode: ''
        }
    */
    const handleCreateEmployee = (newEmployee) => {
        let localData = []
        if (localStorage.getItem("employeeData")) {
            localData = JSON.parse(localStorage.getItem('employeeData'))
        }
        localData.push(newEmployee)
        localStorage.setItem('employeeData', JSON.stringify(localData))
        setDataArray(localData)
      }
    
      /**
       * Executed one time, when component is being mounted
       */
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