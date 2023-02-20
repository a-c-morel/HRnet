import PropTypes from 'prop-types'
import PureModal from 'react-pure-modal'

const ModalCustom = ({ isOpen, onClose }) => (
    <PureModal
        isOpen={isOpen}
        closeButton='✖'
        closeButtonPosition='bottom'
        onClose={onClose}
        width='400px'
        className='modal'
    >
        <p>Employee Created !</p>
    </PureModal>
)

export default ModalCustom

ModalCustom.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}