import PropTypes from 'prop-types';
import del from '../../img/del.svg';
import user from '../../img/user.svg';
import {
  Item,
  Name,
  Number,
  Del,
  Icon,
  User,
  Select,
} from './ContactList.styled';

const ContactListItem = ({ name, number, onDelete, onEdit, id }) => {
  return (
    <Item>
      <Select onClick={() => onEdit(id)} title="Сlick to edit">
        <User>
          <Icon src={user} width="15px" />
        </User>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </Select>
      <Del
        aria-label="Delete contact"
        onClick={() => onDelete(id)}
        title="Сlick to delete"
      >
        <Icon src={del} width="15px" />
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