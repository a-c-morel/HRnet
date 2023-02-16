import PureModal from 'react-pure-modal'

const ModalCustom = ({ isOpen, onClose }) => (
    <PureModal
        isOpen={isOpen}
        closeButton="X"
        closeButtonPosition="bottom"
        onClose={onClose}
        width='400px'
        className='modal'
    >
        <p>Employee Created !</p>
    </PureModal>
)

export default ModalCustom