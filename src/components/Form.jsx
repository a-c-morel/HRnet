import { useState } from "react"
import PropTypes from 'prop-types'
import format from "date-fns/format"
import { states, departments } from '../utils/selectOptions'
import 'react-pure-modal/dist/react-pure-modal.min.css'
import DatePickerCustom from "./DatePickerCustom"
import SelectCustom from "./SelectCustom"
import ModalCustom from "./ModalCustom"

function Form({ onSubmit }) {

    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
    const [modal, setModal] = useState(false)
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
    const handleSelectDepartmentChange = (selectedOption) => {
        const selectedValue = selectedOption.value
        setNewEmployee({
            ...newEmployee,
            department: selectedValue
        })
    }
    const handleSelectStateChange = (selectedOption) => {
        const selectedValue = selectedOption.value
        setNewEmployee({
            ...newEmployee,
            state: selectedValue
        })
    }
    const handleFormSubmit = (event) => {
        event.preventDefault()
        onSubmit(newEmployee)
    }
    const handleCloseModal = () => {
        setModal(false)
        setNewEmployee({
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
        setDateOfBirth(new Date())
        setStartDate(new Date())
        return true
    }

    return (
        <>
            <ModalCustom
                isOpen={modal}
                onClose={handleCloseModal}
            />
            <form
                onSubmit={handleFormSubmit} 
                className='create-employee-form'
            >
                <section className="create-employee-form__identity">
                    <label htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className='input'
                        type='text'
                        id="firstName"
                        onChange={handleInputChange}
                        value={newEmployee.firstName}
                    />
                    <label htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className='input'
                        type='text'
                        id="lastName"
                        onChange={handleInputChange}
                        value={newEmployee.lastName}
                    />
                    <DatePickerCustom
                        label="Date of Birth"
                        value={dateOfBirth}
                        onChange={handleDateOfBirthChange}
                    />
                    <DatePickerCustom
                        label="Start Date"
                        value={startDate}
                        onChange={handleStartDateChange}
                    />
                </section>
                <fieldset className="create-employee-form__address">
                    <legend>
                        Address
                    </legend>
                    <label htmlFor='street'>
                        Street
                    </label>
                    <input
                        className='input'
                        type='text'
                        id='street'
                        onChange={handleInputChange}
                        value={newEmployee.street}
                    />
                    <label htmlFor='city'>
                        City
                    </label>
                    <input
                        className='input'
                        type='text'
                        id='city'
                        onChange={handleInputChange}
                        value={newEmployee.city}
                    />
                    <label htmlFor="state">
                        State
                    </label>
                    <SelectCustom
                        defaultValue={states[0]}
                        name="states"
                        options={states}
                        onChange={handleSelectStateChange}
                        className='states-selector'
                        styles={{container: (baseStyles) => ({
                            ...baseStyles,
                            width: '18.7rem'
                        })}}
                    />
                    <label htmlFor='zipCode'>
                        Zip Code
                    </label>
                    <input
                        className='input'
                        type='text'
                        id='zipCode'
                        onChange={handleInputChange}
                        value={newEmployee.zipCode}
                    />
                </fieldset>
                <section className="create-employee-form__department">
                    <label htmlFor="department">
                        Department
                    </label>
                    <SelectCustom
                        defaultValue={departments[0]}
                        name="department"
                        options={departments}
                        onChange={handleSelectDepartmentChange}
                        styles={{container: (baseStyles) => ({
                            ...baseStyles,
                            width: '19rem'
                        })}}
                    />
                </section>
                <button
                    type='submit'
                    className="create-employee-form__save-button"
                    onClick={() => {setModal(true)}}
                >
                    Save
                </button>
            </form>
        </>
    )
}

export default Form

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}