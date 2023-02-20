import PropTypes from 'prop-types'
import DatePicker from 'react-date-picker'

const DatePickerCustom = ({ label, value, onChange, format='MM-dd-y' }) => (
    <>
        <label htmlFor={label}>{label}</label>
        <DatePicker onChange={onChange} value={value} format={format} name={label} />
    </>
)

export default DatePickerCustom

DatePickerCustom.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.instanceOf(Date).isRequired,
    onChange: PropTypes.func.isRequired,
    format: PropTypes.string
}