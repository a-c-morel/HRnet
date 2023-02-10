import format from "date-fns/format"
import { useState } from "react"
import DOBDatePicker from "./DOBDatePicker"
import StartDatePicker from "./StartDatePicker"
import { states } from './statesNames'

function Form({ onSubmit }) {

    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
    const [newEmployee, setNewEmployee] = useState({
        firstName: '',
        lastName: '',
        startDate: '',
        department: 'Sales',
        dateOfBirth: '',
        street: '',
        city: '',
        state: 'AL',
        zipCode: ''
    })
    
    const handleInputChange = (event) => {
        setNewEmployee({
            ...newEmployee,
            [event.target.id]: event.target.value
        })
    }
    const handleDateOfBirthChange = (value) => {
        setDateOfBirth(value)
        setNewEmployee({
        ...newEmployee,
        dateOfBirth: format(value, "MM-dd-yyyy")
        })
    }
    const handleStartDateChange = (value) => {
        setStartDate(value)
        setNewEmployee({
        ...newEmployee,
        startDate: format(value, "MM-dd-yyyy")
        })
    } 
    const handleFormSubmit = (event) => {
        event.preventDefault()
        onSubmit(newEmployee)
    }

  return (
        <form onSubmit={handleFormSubmit}>
            <section className="employee-creation__identity">
                <label htmlFor="firstName">
                    First Name
                </label>
                <input type='text' id="firstName" onChange={handleInputChange} />
                <label htmlFor="lastName">
                    Last Name
                </label>
                <input type='text' id="lastName" onChange={handleInputChange} />
                <DOBDatePicker onDateChange={handleDateOfBirthChange} value={dateOfBirth} />
                <StartDatePicker onDateChange={handleStartDateChange} value={startDate} />
            </section>
            <fieldset className="employee-creation__address">
                <legend>
                    Address
                </legend>
                <label htmlFor='street'>
                    Street
                </label>
                <input type='text' id='street'onChange={handleInputChange} />
                <label htmlFor='city'>
                    City
                </label>
                <input type='text' id='city' onChange={handleInputChange} />
                <label htmlFor="state">
                    State
                </label>
                <select id="state" onChange={handleInputChange} >
                {
                  states.map((state, index) => 
                    <option key={index} value={state.abbreviation}>{state.name}</option>
                  )
                }
                </select>
                <label htmlFor='zipCode'>
                    Zip Code
                </label>
                <input type='text' id='zipCode' onChange={handleInputChange} />
            </fieldset>
            <section className="employee-creation__department">
                <label htmlFor="department">
                    Department
                </label>
                <select id="department" value={newEmployee.department} onChange={handleInputChange} >
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </section>
            <button type='submit'>Save</button>
        </form>
  )
}

export default Form
