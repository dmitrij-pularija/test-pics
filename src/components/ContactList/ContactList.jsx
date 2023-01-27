import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
