import PropTypes from 'prop-types';
import { Cont, Card } from './Container.styled';

const Container = ({ children }) => {
  return (
    <Cont>
      <Card>{children}</Card>
    </Cont>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;