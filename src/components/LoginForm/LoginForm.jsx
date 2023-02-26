import { useDispatch } from 'react-redux';
import { useAuth } from '../../services/hooks';

import Form from 'moduls/form/Form';
import { ReactComponent as IconClose } from '../../img/clear.svg';
import { logIn } from '../../redux/auth/operations';
import { initialLoginForm } from '../../services/initial';
import { Container, Back } from './LoginForm.styled';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const handleSubmit = ({ email, password }, { resetForm }) => {
      dispatch(logIn({ email, password }));
      isLoggedIn && resetForm();
  };


  return (
    <Container>
    <Form initialState={initialLoginForm} onSubmit={handleSubmit} mode={'SignIn'} />
    <Back to="/" title="Сlick to back">
          <IconClose stroke="currentColor" />
    </Back>
    </Container>
  );
};