import { Component } from 'react';
import book from '../img/book.svg';
import Modal from './Modal/Modal';
import Filter from './Filter/Filter';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';
import { List, Icon, Title, Blue } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    contactRow: { id: '', name: '', number: '' },
    modalShow: false,
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts-state'));
    if (contacts) this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts)
      localStorage.setItem('contacts-state', JSON.stringify(contacts));
  }

  setFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  clearFilter = () => {
    this.setState({ filter: '' });
  };

  addContact = ({ id, name, number }) => {
    const newContact = { id, name, number };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
    this.modalToggle();
  };

  delContact = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState(() => ({ contacts: [...newContacts] }));
  };

  editContact = newContact => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== newContact.id
    );
    this.setState(() => ({ contacts: [newContact, ...newContacts] }));
    this.setState({ contactRow: { id: '', name: '', number: '' } });
    this.modalToggle();
  };

  selectContact = id => {
    const editDetals = this.state.contacts.find(contact => contact.id === id);
    this.setState({ contactRow: editDetals });
    this.modalToggle();
  };

  filterContacts = () => {
    let contactFiltred = [];
    if (this.state.filter) {
      contactFiltred = this.state.contacts.filter(
        contact =>
          contact.name
            .toUpperCase()
            .includes(this.state.filter.toUpperCase()) ||
          contact.number.includes(this.state.filter)
      );
      return contactFiltred;
    } else {
      return this.state.contacts.sort((firstСontacts, secondСontacts) =>
        firstСontacts.name.localeCompare(secondСontacts.name)
      );
    }
  };

  modalToggle = () => {
    document.querySelector('body').classList.toggle('no-scroll');
    this.setState(({ modalShow }) => ({
      modalShow: !modalShow,
    }));
  };

  render() {
    const { filter, contacts, contactRow, modalShow } = this.state;
    const contactFiltred = this.filterContacts();
    return (
      <Container>
        <Title>
          <Icon src={book} width="20px" />
          Phone<Blue>book</Blue>
        </Title>
        <List>
          <Filter
            value={filter}
            onAdd={this.modalToggle}
            onFilterChange={this.setFilter}
            onFilterClear={this.clearFilter}
          />
          {contactFiltred.length > 0 ? (
            <ContactList
              contacts={contactFiltred}
              onDelete={this.delContact}
              onEdit={this.selectContact}
            />
          ) : (
            <Notification message="contacts not found" />
          )}
        </List>
        {modalShow && (
          <Modal onClose={this.modalToggle}>
            <ContactForm
              formSubmit={!contactRow.id ? this.addContact : this.editContact}
              contacts={contacts}
              buttonText={!contactRow.id ? 'Add contact' : 'Edit contact'}
              setEdit={contactRow}
            />
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;