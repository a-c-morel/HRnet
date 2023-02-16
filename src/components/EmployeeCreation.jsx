import Form from './Form'
import { useContext } from 'react'
import { DataArrayContext } from '../context/DataArrayContext'

function EmployeeCreation() {

  const {handleCreateEmployee} = useContext(DataArrayContext)

  return (
      <main className='create-employee'>
        <h2 className='create-employee__title'>
          Create Employee
        </h2>
        <Form onSubmit={handleCreateEmployee}/>
      </main>
  )
}

export default EmployeeCreation
