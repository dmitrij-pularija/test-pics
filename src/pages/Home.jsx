import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <p>
        Welcome to the <b>PhoneBook</b> application
      </p>
      <p>You must be logged in to get started</p>
      <p>&nbsp;</p>
      <Link to="/register">Sign Up</Link>
      <span>&nbsp;|&nbsp;</span>
      <Link to="/login">Sign In</Link>
    </div>
  );
};

export default Home;