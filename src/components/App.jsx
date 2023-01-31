import { useState, useEffect } from 'react';
import book from '../img/book.svg';
import Modal from './Modal/Modal';
import Filter from './Filter/Filter';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';
import { List, Icon, Title, Blue } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [contactRow, setEdit] = useState({ id: '', name: '', number: '' });

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts-state'));
    isNaN(localContacts) && setContacts(localContacts);
  }, []);

  useEffect(() => {
    contacts &&
      localStorage.setItem('contacts-state', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = ({ target: { value } }) => setFilter(value);

  const clearFilter = () => setFilter('');

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [newContact, ...prevContacts];
    });
    modalToggle();
  };

  const delContact = id =>
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );

  const editContact = editContact => {
    setContacts(prevContacts => {
      return [
        editContact,
        ...contacts.filter(contact => contact.id !== editContact.id),
      ];
    });
    modalToggle();
  };

  const selectContact = id => {
    setEdit(contacts.find(contact => contact.id === id));
    modalToggle();
  };

  const filterContacts = () => {
    let contactFiltred = [];
    if (filter) {
      contactFiltred = contacts.filter(
        contact =>
          contact.name.toUpperCase().includes(filter.toUpperCase()) ||
          contact.number.includes(filter)
      );
      return contactFiltred;
    } else {
      return contacts.sort((firstСontacts, secondСontacts) =>
        firstСontacts.name.localeCompare(secondСontacts.name)
      );
    }
  };

  const modalToggle = () => {
    document.querySelector('body').classList.toggle('no-scroll');
    modalShow && setEdit({ id: '', name: '', number: '' });
    setModalShow(prevModalShow => !prevModalShow);
  };

  const contactFiltred = filterContacts();

  return (
    <Container>
      <Title>
        <Icon src={book} width="20px" />
        Phone<Blue>book</Blue>
      </Title>
      <List>
        <Filter
          value={filter}
          onAdd={modalToggle}
          onFilterChange={changeFilter}
          onFilterClear={clearFilter}
        />
        {contactFiltred.length > 0 ? (
          <ContactList
            contacts={contactFiltred}
            onDelete={delContact}
            onEdit={selectContact}
          />
        ) : (
          <Notification message="contacts not found" />
        )}
      </List>
      {modalShow && (
        <Modal onClose={modalToggle}>
          <ContactForm
            formSubmit={!contactRow.id ? addContact : editContact}
            contacts={contacts}
            buttonText={!contactRow.id ? 'Add contact' : 'Edit contact'}
            contactRow={contactRow}
          />
        </Modal>
      )}
    </Container>
  );
};

export default App;