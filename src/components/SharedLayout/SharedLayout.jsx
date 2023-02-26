import { Outlet } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import Notification from 'components/Notification/Notification';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import Container from '../Container/Container';
// import avatar from '../../img/avatar.png';

// import { modalState } from '../../redux/statusSlice';
// import { ReactComponent as IconLogin } from '../../img/login.svg';
// import { ReactComponent as IconRegister } from '../../img/register.svg';
// import { ReactComponent as IconOut } from '../../img/out.svg';
// import { ReactComponent as IconUser } from '../../img/user.svg';
// import { ReactComponent as IconNouser } from '../../img/nouser.svg';
import { ReactComponent as IconBook } from '../../img/book.svg';
import { Header, Logo, BlueText, OutletBox } from './SharedLayout.styled';
import UserMenu from '../UserMenu/UserMenu';
// import Dropdown from 'rc-dropdown';
// import Menu, { Item as MenuItem, Divider } from 'rc-menu';
// import 'rc-dropdown/assets/index.css';
// import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../services/hooks';

 

const SharedLayout = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { user: { name, email }, isRefreshing, isLoggedIn } = useAuth();
  const { isRefreshing } = useAuth();

  // const openModal = () => dispatch(modalState());
  // const onSelect = ({ key }) => dispatch(logOut());
// let menu = '';
// let IconMenu = '';
// isLoggedIn ? IconMenu = IconUser : IconMenu = IconNouser;
//   const onSelect = ({ key }) => {
//     key === 'out' && dispatch(logOut());
//     key === 'in' && navigate(`/login`);
//     key === 'up' && navigate(`/register`);
//   };
  
//   if  (isLoggedIn) {
//     menu = (
//       <Menu onSelect={onSelect}>
//       <MenuItem key="0" disabled><Avatar src={avatar} alt="User avatar" /></MenuItem>
//       <MenuItem key="1" disabled><Item>Welcome, {name}</Item></MenuItem>
//       <MenuItem key="2" disabled><Item>{email}</Item></MenuItem>
//       <Divider />
//       <MenuItem key="out"><Button>
//       <IconOut fill="currentColor"  width="20px" height="20px" />&nbsp;Sign Out</Button></MenuItem>    
//      </Menu>
//   );         
//   } else {
// menu = (
//   <Menu onSelect={onSelect}>
//       <MenuItem key="0" disabled><Avatar src={avatar} alt="User avatar" /></MenuItem>
//       <MenuItem key="1" disabled><Item>Register please</Item></MenuItem>
//              <MenuItem key="up"><Button>
//              <IconRegister fill="currentColor"  width="20px" height="20px" />&nbsp;Sign Up</Button></MenuItem>
//              <MenuItem key="in"><Button>
//         <IconLogin fill="currentColor"  width="20px" height="20px" />&nbsp;Sign In</Button></MenuItem>    
//     </Menu>
//   );  
//   }
  
  return (
    <Container>
      <Header>
        <Logo to="/contacts">
          <IconBook style={{ fill: "currentColor", width: "23px", marginRight: "5px" }} />
          Phone<BlueText>book</BlueText>
        </Logo>
        <UserMenu />
        {/* <Dropdown
    trigger={['click']}
    overlay={menu}
    animation="slide-up"
  >
  <User title={isLoggedIn ? "Сlick to view user information" : "Сlick to authorization"}>
        <IconMenu fill="currentColor"  width="25px" height="25px" />
  </User>
  </Dropdown>
        <User
        type="button"
        onClick={() => openModal()}
        title="Сlick to add new contact"
      >
        <IconUser fill="currentColor"  width="25px" height="25px" />
      </User> */}
      </Header>
      <OutletBox>
      <Suspense fallback={<Loader />}>
      {isRefreshing ? <Notification message={'Updating user information...'} /> : <Outlet />}
      </Suspense>
      </OutletBox>
    </Container>
  );
};

export default SharedLayout;