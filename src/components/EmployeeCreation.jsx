import { useContext, useEffect } from 'react'
import Form from './Form'
import { DataArrayContext } from '../context/DataArrayContext'

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