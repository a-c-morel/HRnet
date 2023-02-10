import DatePicker from 'react-date-picker'

function DOBDatePicker({ onDateChange, value }) {

  const handleChange = (value) => {
    onDateChange(value);
  }

  return (
    <>
        <label htmlFor="date-of-birth">
            Date of Birth
        </label>
        <DatePicker onChange={handleChange} value={value} format='MM-dd-y' name='Date of Birth'/>
    </>
          
  )
}

export default DOBDatePicker
