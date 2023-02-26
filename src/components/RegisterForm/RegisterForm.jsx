import { useDispatch } from 'react-redux';
import { useAuth } from '../../services/hooks';
import { register } from '../../redux/auth/operations';
import Form from 'moduls/form/Form';
import { initialRegisterForm } from '../../services/initial';
import { Container, Back } from '../LoginForm/LoginForm.styled';
import { ReactComponent as IconClose } from '../../img/clear.svg';


export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    isLoggedIn && resetForm();
};

  return (
    <Container>
    <Form initialState={initialRegisterForm} onSubmit={handleSubmit} mode={'SignUp'} />
    <Back to="/" title="Сlick to back">
          <IconClose stroke="currentColor" />
    </Back>
    </Container>  
  );
};