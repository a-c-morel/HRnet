import DatePicker from 'react-date-picker'

function StartDatePicker({ onDateChange, value }) {
  
  const handleChange = (value) => {
    onDateChange(value);
  }

  return (
    <>
        <label htmlFor="start-date">
            Start Date
        </label>
        <DatePicker onChange={handleChange} value={value} format='MM-dd-y' name='Start Date'/>
    </>
          
  )
}

export default StartDatePicker