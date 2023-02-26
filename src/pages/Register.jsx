import { Link } from 'react-router-dom';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';


const Register = () => {
  return (
    <>
      <RegisterForm />
      <Link to="/login">I'm already registered</Link>
    </>
  );
}

export default Register;