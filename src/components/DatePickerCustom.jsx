import DatePicker from 'react-date-picker'

const DatePickerCustom = ({ label, value, onChange, format='MM-dd-y' }) => (
  <>
    <label htmlFor={label}>{label}</label>
    <DatePicker onChange={onChange} value={value} format={format} name={label} />
  </>
)

export default DatePickerCustom