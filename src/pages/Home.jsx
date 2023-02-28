import { Link } from 'react-router-dom';
import { useAuth } from '../services/hooks';

const HomePage = () => {
  const {
    user: { name },
    isLoggedIn,
  } = useAuth();

  return (
    <div>
      {isLoggedIn && <p>{name}</p>}
      <p>&nbsp;</p>
      <p>
        Welcome to the <b>PhoneBook</b> application
      </p>
      {isLoggedIn ? (
        <div>
          <p>Now you can go to your contacts via the link:</p>
          <p>&nbsp;</p>
          <Link to="/contacts">Contacts</Link>
        </div>
      ) : (
        <div>
          <p>You must be logged in to get started</p>
          <p>&nbsp;</p>
          <Link to="/register">Sign Up</Link>
          <span>&nbsp;|&nbsp;</span>
          <Link to="/login">Sign In</Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;