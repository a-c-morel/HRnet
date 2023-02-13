import Form from './Form'

function EmployeeCreation({ onEmployeeCreation }) {

  const handleSubmit = (newEmployee) => {
    onEmployeeCreation(newEmployee)
  }

  return (
      <main className='create-employee'>
        <h2>
          Create Employee
        </h2>
        <Form onSubmit={handleSubmit}/>
      </main>
  )
}

export default EmployeeCreation
