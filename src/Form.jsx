import { useState } from "react"
import DOBDatePicker from "./DOBDatePicker"
import StartDatePicker from "./StartDatePicker"
import { dataArrayDefault } from './mockData'

function Form() {

  const [dataArray, setDataArray] = useState(dataArrayDefault)

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    countryState: '',
    department: ''
  })

  return (
    <>
        <form>
            <section className="employee-creation__identity">
                <label htmlFor="first-name">
                    First Name
                </label>
                <input type='text' id="first-name" />
                <label htmlFor="last-name">
                    Last Name
                </label>
                <input type='text' id="last-name" />
                <DOBDatePicker />
                <StartDatePicker />
            </section>
            <fieldset className="employee-creation__address">
                <legend>
                    Address
                </legend>
                <label htmlFor='street'>
                    Street
                </label>
                <input type='text' id='street'/>
                <label htmlFor='city'>
                    City
                </label>
                <input type='text' id='city' />
                <label htmlFor="state">
                    State
                </label>
                <select id="state">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </fieldset>
            <section className="employee-creation__department">
                <label htmlFor="department">
                    Department
                </label>
                <select id="department">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </section>
            <button type='submit'>Save</button>
        </form>
    </>
  )
}

export default Form
