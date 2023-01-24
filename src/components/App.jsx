import { Component } from 'react';
import book from '../img/book.svg';
import Filter from './Filter/Filter';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';
import { Box, List, Icon, Title, Blue } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    contactRow: { id: '', name: '', number: '' },
  };

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
  };

  selectContact = id => {
    const editDetals = this.state.contacts.find(contact => contact.id === id);
    this.setState({ contactRow: editDetals });
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

  render() {
    const contactFiltred = this.filterContacts();
    return (
      <Container>
        <Title>
          <Icon src={book} width="20px" />
          Phone<Blue>book</Blue>
        </Title>
        <Box>
          <List>
            <Filter
              value={this.state.filter}
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
          <ContactForm
            formSubmit={
              !this.state.contactRow.id ? this.addContact : this.editContact
            }
            contacts={this.state.contacts}
            buttonText={
              !this.state.contactRow.id ? 'Add contact' : 'Edit contact'
            }
            setEdit={this.state.contactRow}
          />
        </Box>
      </Container>
    );
  }
}

export default App;