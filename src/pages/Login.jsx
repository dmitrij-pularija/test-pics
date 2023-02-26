import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <>
      <LoginForm />
      <Link to="/register">I`m not registered</Link>
    </>
  );
};

export default Login;