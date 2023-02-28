import { Formik } from 'formik';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import avatar from '../../img/avatar.png';
import { LoaderSmall } from '../../components/Loader/Loader';
import { ReactComponent as IconAdd } from '../../img/add.svg';
import { ReactComponent as IconShow } from '../../img/show.svg';
import { ReactComponent as IconHide } from '../../img/hide.svg';
import { ReactComponent as IconUser } from '../../img/user.svg';
import { ReactComponent as IconEdit } from '../../img/edit.svg';
import { ReactComponent as IconCheck } from '../../img/check.svg';
import { ReactComponent as IconLogin } from '../../img/login.svg';
import { ReactComponent as IconPhone } from '../../img/phone.svg';
import { ReactComponent as IconEmail } from '../../img/email.svg';
import { contactItems, signUpItems, signInItems } from './form-fields';
import { ReactComponent as IconRegister } from '../../img/register.svg';
import { ReactComponent as IconPassword } from '../../img/password.svg';
import {
  selectIsFulfilled,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import {
  Forma,
  Label,
  Input,
  Button,
  List,
  Item,
  Avatar,
  IconBox,
  Show,
} from './form.styled';

const Form = ({ initialState, onSubmit, mode }) => {
  const [showPassword, setShowPassword] = useState(false);
  let buttonText = '';
  let ButtonIcon = '';
  let items = [];
  if (mode === 'add') {
    ButtonIcon = IconAdd;
    buttonText = 'Add contact';
    items = contactItems;
  }
  if (mode === 'edit') {
    ButtonIcon = IconEdit;
    buttonText = 'Edit contact';
    items = contactItems;
  }
  if (mode === 'SignUp') {
    ButtonIcon = IconRegister;
    buttonText = 'Sign Up';
    items = signUpItems;
  }
  if (mode === 'SignIn') {
    ButtonIcon = IconLogin;
    buttonText = 'Sign In';
    items = signInItems;
  }
  const isLoading = useSelector(selectIsLoading);
  const isFulfilled = useSelector(selectIsFulfilled);
  const chengShowPassword = () => setShowPassword(!showPassword);
  let PasswordIcon = showPassword ? IconShow : IconHide;

  return (
    <Formik initialValues={initialState} onSubmit={onSubmit}>
      <Forma autoComplete="off">
        <Avatar src={avatar} alt="User avatar" />
        <List>
          {items.map(({ name, type, icon }, index) => (
            <Item key={index}>
              <IconBox>
                {icon === 'IconUser' && (
                  <IconUser fill="currentColor" width="20px" height="20px" />
                )}
                {icon === 'IconPhone' && (
                  <IconPhone fill="currentColor" width="20px" height="20px" />
                )}
                {icon === 'IconEmail' && (
                  <IconEmail fill="currentColor" width="20px" height="20px" />
                )}
                {icon === 'IconPassword' && (
                  <IconPassword
                    fill="currentColor"
                    width="20px"
                    height="20px"
                  />
                )}
              </IconBox>
              <Label htmlFor={name}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Label>
              <Input
                type={
                  type === 'password'
                    ? showPassword
                      ? 'text'
                      : 'password'
                    : type
                }
                name={name}
                minLength={type === 'password' ? '7' : '3'}
                required
              />
              {type === 'password' && (
                <Show type="button" onClick={chengShowPassword}>
                  <PasswordIcon
                    fill="currentColor"
                    width="15px"
                    height="15px"
                  />
                </Show>
              )}
            </Item>
          ))}
          <Item key={5}>
            <Button type="submit">
              {isLoading ? (
                <LoaderSmall color={'#36d7b7'} />
              ) : isFulfilled ? (
                <IconCheck fill="#36d7b7" width="20px" height="20px" />
              ) : (
                <ButtonIcon fill="currentColor" width="20px" height="20px" />
              )}
              &nbsp;{buttonText}
            </Button>
          </Item>
        </List>
      </Forma>
    </Formik>
  );
};

Form.propTypes = {
  mode: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialState: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};

export default Form;