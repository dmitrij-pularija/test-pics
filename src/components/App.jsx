import { useSelector } from 'react-redux';
import book from '../img/book.svg';
import Modal from './Modal/Modal';
import Filter from './Filter/Filter';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { List, Icon, Title, Blue } from './App.styled';

const App = () => {
  const modalShow = useSelector(state => state.modalShow);

  return (
    <Container>
      <Title>
        <Icon src={book} width="20px" />
        Phone<Blue>book</Blue>
      </Title>
      <List>
        <Filter />
        <ContactList />
      </List>
      {modalShow && (
        <Modal>
          <ContactForm />
        </Modal>
      )}
    </Container>
  );
};

export default App;