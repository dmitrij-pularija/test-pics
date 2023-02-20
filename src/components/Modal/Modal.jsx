import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { modalState, selectContact } from '../../redux/statusSlice';
import { ReactComponent as IconClose } from '../../img/clear.svg';
import { Overlay, Mod, Close } from './Modal.styled';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(selectContact(''));
    dispatch(modalState());
  };

  return (
    <Overlay>
      <Mod>
        {children}
        <Close onClick={closeModal} title="Сlick to close">
          <IconClose stroke="currentColor" />
        </Close>
      </Mod>
    </Overlay>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;