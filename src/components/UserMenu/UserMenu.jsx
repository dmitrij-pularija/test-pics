import Dropdown from 'rc-dropdown';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IconLogin } from '../../img/login.svg';
import { ReactComponent as IconRegister } from '../../img/register.svg';
import { ReactComponent as IconOut } from '../../img/out.svg';
import { ReactComponent as IconUser } from '../../img/user.svg';
import { ReactComponent as IconNouser } from '../../img/nouser.svg';
import { User, Item, Avatar, Button } from './UserMenu.styled.js';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../services/hooks';
import avatar from '../../img/avatar.png';
import 'rc-dropdown/assets/index.css';


const UserMenu = () => {
  let menu = '';
  let IconMenu = '';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: { name, email }, isLoggedIn } = useAuth();
  isLoggedIn ? IconMenu = IconUser : IconMenu = IconNouser;
    const onSelect = ({ key }) => {
      key === 'out' && dispatch(logOut());
      key === 'in' && navigate(`/login`);
      key === 'up' && navigate(`/register`);
    };
    
    if  (isLoggedIn) {
      menu = (
        <Menu onSelect={onSelect}>
        <MenuItem key="0" disabled><Avatar src={avatar} alt="User avatar" /></MenuItem>
        <MenuItem key="1" disabled><Item>Welcome, {name}</Item></MenuItem>
        <MenuItem key="2" disabled><Item>{email}</Item></MenuItem>
        <Divider />
        <MenuItem key="out"><Button>
        <IconOut fill="currentColor"  width="20px" height="20px" />&nbsp;Sign Out</Button></MenuItem>    
       </Menu>
    );         
    } else {
  menu = (
    <Menu onSelect={onSelect}>
        <MenuItem key="0" disabled><Avatar src={avatar} alt="User avatar" loading="lazy" /></MenuItem>
        <MenuItem key="1" disabled><Item>Register please</Item></MenuItem>
               <MenuItem key="up"><Button>
               <IconRegister fill="currentColor"  width="20px" height="20px" />&nbsp;Sign Up</Button></MenuItem>
               <MenuItem key="in"><Button>
          <IconLogin fill="currentColor"  width="20px" height="20px" />&nbsp;Sign In</Button></MenuItem>    
      </Menu>
    );  
    }
  
return (
  <Dropdown
  trigger={['click']}
  overlay={menu}
  animation="slide-up"
>
<User title={isLoggedIn ? "Сlick to view user information" : "Сlick to authorization"}>
      <IconMenu fill="currentColor"  width="25px" height="25px" />
</User>
</Dropdown>

);
};

export default UserMenu;