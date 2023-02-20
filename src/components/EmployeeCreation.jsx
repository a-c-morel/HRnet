import { useContext, useEffect } from 'react'

import { DataArrayContext } from '../context/DataArrayContext'
import Form from './Form'


function EmployeeCreation() {

  const {handleCreateEmployee} = useContext(DataArrayContext)

  useEffect(() => {
    document.title = 'HRnet - Create an employee'
  }, [])

  return (
    <main>
      <div className='create-employee'>
        <h2 className='create-employee__title'>
          Create Employee
        </h2>
        <Form onSubmit={handleCreateEmployee}/>
      </div>
    </main>
  )
}

export default EmployeeCreation