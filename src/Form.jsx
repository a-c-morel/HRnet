import format from "date-fns/format"
import { useState } from "react"
import { states } from './statesNames'
import DatePicker from 'react-date-picker'
import PureModal from 'react-pure-modal'
import 'react-pure-modal/dist/react-pure-modal.min.css'
import Select from 'react-select'

function Form({ onSubmit }) {

    const options = [
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' }
      ]
      
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
    const [modal, setModal] = useState(false)
    const [selectedDepartment, setSelectedDepartment] = useState(newEmployee.department)
    
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
    const handleSelectDepartmentChange = (selectedOption) => {
        const selectedValue = selectedOption.value
        setNewEmployee({
            ...newEmployee,
            department: selectedValue
        })
    }
    const handleFormSubmit = (event) => {
        event.preventDefault()
        onSubmit(newEmployee)
    }

    return (
        <>
        <PureModal
            isOpen={modal}
            closeButton="X"
            closeButtonPosition="bottom"
            onClose={() => {
                setModal(false);
                return true;
            }}
        >
            <p>Employee Created !</p>
        </PureModal>
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
                <label htmlFor="date-of-birth">
                    Date of Birth
                </label>
                <DatePicker onChange={handleDateOfBirthChange} value={dateOfBirth} format='MM-dd-y' name='Date of Birth'/>
                <label htmlFor="start-date">
                    Start Date
                </label>
                <DatePicker onChange={handleStartDateChange} value={startDate} format='MM-dd-y' name='Start Date'/>
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
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={options[0]}
                    isDisabled={false}
                    isLoading={false}
                    isClearable={false}
                    isRtl={false}
                    isSearchable={true}
                    name="department"
                    options={options}
                    onChange={handleSelectDepartmentChange}
                />
            </section>
            <button type='submit' className="button" onClick={() => setModal(true)}>Save</button>
        </form>
        </>
    )
}

export default Form
