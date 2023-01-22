import PropTypes from 'prop-types';
import del from '../../img/del.svg';
import user from '../../img/user.svg';
import { Item, Name, Number, Del, Icon, User } from './ContactList.styled';

const ContactListItem = ({ name, number, onDelete, onEdit, id }) => {
  return (
    <Item>
      <User onClick={() => onEdit(id)}>
        <Icon src={user} width="12px" />
      </User>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Del aria-label="Delete contact" onClick={() => onDelete(id)}>
        <Icon src={del} width="11px" />
      </Del>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ContactListItem;