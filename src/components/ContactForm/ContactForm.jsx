import PropTypes from 'prop-types';
import { Component } from 'react';
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

class ContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { formSubmit } = this.props;
    const { name, number } = this.state;
    const { contacts } = this.props;
    const dubl = contacts.find(
      contact => contact.name.toUpperCase() === this.state.name.toUpperCase()
    );
    let id = this.state.id;

    if (dubl && dubl.id !== this.props.setEdit.id)
      return Report.warning(
        `${this.state.name}`,
        'This Name is already in the contact list.',
        'OK'
      );

    if (!id) id = nanoid();
    formSubmit({ id, name, number });
    this.reset();
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });

    if (!this.state.id && this.props.setEdit.id && name === 'number') {
      this.setState({
        id: this.props.setEdit.id,
        name: this.props.setEdit.name,
      });
    }

    if (!this.state.id && this.props.setEdit.id && name === 'name') {
      this.setState({
        id: this.props.setEdit.id,
        number: this.props.setEdit.number,
      });
    }
  };

  value = name => {
    if (!this.state.id && this.props.setEdit.id) {
      return this.props.setEdit[name];
    } else return this.state[name];
  };

  reset = () => {
    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    return (
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <Avatar src={avatar} alt="User avatar" />
        <List>
          <Item>
            <IconBox>
              <Icon src={user} width="15px" />
            </IconBox>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={this.value('name')}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Item>
          <Item>
            <IconBox>
              <Icon src={phone} width="15px" />
            </IconBox>
            <Label htmlFor="number">Number</Label>
            <Input
              type="tel"
              name="number"
              value={this.value('number')}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Item>
          <Item>
            <Button type="submit">{this.props.buttonText}</Button>
          </Item>
        </List>
      </Form>
    );
  }

  static propTypes = {
    formSubmit: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,

    setEdit: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
  };
};

export default ContactForm;