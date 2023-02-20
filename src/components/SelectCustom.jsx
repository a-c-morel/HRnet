import PropTypes from 'prop-types'
import Select from "react-select"

const SelectCustom = ({ defaultValue, name, options, onChange, styles }) => (
    <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={defaultValue}
        isDisabled={false}
        isLoading={false}
        isClearable={false}
        isRtl={false}
        isSearchable={true}
        name={name}
        options={options}
        onChange={onChange}
        styles={styles}
        theme={(theme) => ({
            ...theme,
            colors: {
                ...theme.colors,
                primary25: 'gainsBoro',
                primary: 'black',
            },
        })}
    />
)

export default SelectCustom

SelectCustom.propTypes = {
    defaultValue: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChange: PropTypes.func.isRequired,
    styles: PropTypes.shape({
        container: PropTypes.func,
    })
}