import propTypes from 'prop-types';
import { Container, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};

export default Section;