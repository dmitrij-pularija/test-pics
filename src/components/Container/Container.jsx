import PropTypes from 'prop-types';
import { Cont, Card, Logo, Icon } from './Container.styled';
import logo from '../../img/logo.svg';

const Container = ({ children }) => {
  return (
    <Cont>
      <Logo>
        <Icon src={logo} />
        React
      </Logo>
      <Card>{children}</Card>
    </Cont>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;