import { Link } from 'react-router-dom';
import AuthForm from 'components/AuthForm/AuthForm';

const RegisterPage = () => {
  return (
    <>
      <AuthForm mode={'register'} />
      <Link to="/login">I'm already registered</Link>
    </>
  );
};

export default RegisterPage;