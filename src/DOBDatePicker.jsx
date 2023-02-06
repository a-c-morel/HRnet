import DatePicker from 'react-date-picker'
import { useState } from 'react'

function DOBDatePicker() {
  const [value, onChange] = useState(new Date())
  
  return (
    <>
        <label htmlFor="date-of-birth">
            Date of Birth
        </label>
        <DatePicker onChange={onChange} value={value} format='MM-dd-y' name='Date of Birth'/>
    </>
          
  )
}

export default DOBDatePicker
