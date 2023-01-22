import propTypes from 'prop-types';
import { Cont, Card, Logo, Icon } from './Container.styled';
import logo from '../../img/logo.svg';

const Container = ({ children }) => {
  return (
    <Cont>
      <Logo>
        <Icon src={logo} />
        React Phonebook
      </Logo>
      <Card>{children}</Card>
    </Cont>
  );
};

Container.propTypes = {
  children: propTypes.node,
};

export default Container;