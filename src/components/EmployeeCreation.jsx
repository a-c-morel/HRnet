import Header from './Header'
import Form from './Form'

function EmployeeCreation({ onEmployeeCreation }) {

  const handleSubmit = (newEmployee) => {
    onEmployeeCreation(newEmployee)
  }

  return (
    <div className='employee-creation'>
      <Header />
      <main>
        <Form onSubmit={handleSubmit}/>
      </main>
    </div>
  )
}

export default EmployeeCreation
