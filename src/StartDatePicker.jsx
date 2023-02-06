import DatePicker from 'react-date-picker'
import { useState } from 'react'

function StartDatePicker() {
  const [value, onChange] = useState(new Date())
  
  return (
    <>
        <label htmlFor="start-date">
            Start Date
        </label>
        <DatePicker onChange={onChange} value={value} format='MM-dd-y' name='Start Date'/>
    </>
          
  )
}

export default StartDatePicker