import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import { useAuth } from '../../services/hooks';

import Form from 'moduls/form/Form';
import { ReactComponent as IconClose } from '../../img/clear.svg';
import { logIn } from '../../redux/auth/operations';
import { initialLoginForm } from '../../services/initial';
import { Container, Back } from './LoginForm.styled';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     logIn({
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };
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

{/* <form onSubmit={handleSubmit} autoComplete="off">
<label>
  Email
  <input type="email" name="email" />
</label>
<label>
  Password
  <input type="password" name="password" />
</label>
<button type="submit">Log In</button>
</form> */}