import PropTypes from 'prop-types';
import Form from 'moduls/form/Form';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../services/hooks';
import { logIn, register } from '../../redux/auth/operations';
import { ReactComponent as IconClose } from '../../img/clear.svg';
import { initialLoginForm, initialRegisterForm } from '../../services/initial';
import { Container, Back } from './LoginForm.styled';

const AuthForm = ({ mode }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const handleSubmit = (event, { resetForm }) => {
    mode === 'login' ? dispatch(logIn(event)) : dispatch(register(event));
    isLoggedIn && resetForm();
  };

  return (
    <Container>
      <Form
        initialState={mode === 'login' ? initialLoginForm : initialRegisterForm}
        onSubmit={handleSubmit}
        mode={mode === 'login' ? 'SignIn' : 'SignUp'}
      />
      <Back to="/" title="Сlick to back">
        <IconClose stroke="currentColor" />
      </Back>
    </Container>
  );
};

AuthForm.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default AuthForm;