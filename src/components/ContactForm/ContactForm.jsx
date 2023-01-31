import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import avatar from '../../img/avatar.png';
import user from '../../img/user.svg';
import phone from '../../img/phone.svg';
import { Report } from 'notiflix/build/notiflix-report-aio';
import {
  Form,
  Label,
  Input,
  Button,
  List,
  Item,
  Avatar,
  IconBox,
  Icon,
} from './ContactForm.styled';

const ContactForm = ({ formSubmit, buttonText, contacts, contactRow }) => {
  const [state, setState] = useState({ id: '', name: '', number: '' });

  useEffect(() => {
    setState({ ...contactRow });
  }, [contactRow]);

  const handleSubmit = event => {
    event.preventDefault();
    const dublName = contacts.find(
      contact => contact.name.toUpperCase() === name.toUpperCase()
    );
    const dublNumber = contacts.find(contact => contact.number === number);
    if (messageDubl(dublName, name)) return;
    if (messageDubl(dublNumber, number)) return;
    const newContact = { id: !id ? nanoid() : id, name, number };
    formSubmit(newContact);
    reset();
  };

  const messageDubl = (dubl, field) => {
    if (dubl && dubl.id !== contactRow.id) {
      Report.warning(
        `${field}`,
        'This Number is already in the contact list.',
        'OK'
      );
      return true;
    } else return false;
  };

  const handleChange = ({ target: { name, value } }) =>
    setState(prevState => {
      return { ...prevState, [name]: value };
    });

  const reset = () => setState({ id: '', name: '', number: '' });

  const { id, name, number } = state;

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Avatar src={avatar} alt="User avatar" />
      <List>
        <Item>
          <IconBox>
            <Icon src={user} width="17px" />
          </IconBox>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Item>
        <Item>
          <IconBox>
            <Icon src={phone} width="17px" />
          </IconBox>
          <Label htmlFor="number">Number</Label>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Item>
        <Item>
          <Button type="submit">{buttonText}</Button>
        </Item>
      </List>
    </Form>
  );
};

ContactForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  contactRow: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactForm;