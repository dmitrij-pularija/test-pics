import PropTypes from 'prop-types';
import { ReactComponent as IconDel } from '../../img/del.svg';
import { ReactComponent as IconUser } from '../../img/user.svg';
import { Item, Name, Number, Del, User, Select } from './ContactList.styled';

const ContactListItem = ({ id, name, number, onDelete, onEdit }) => {
  
  return (
    <Item>
      <Select onClick={() => onEdit(id)} title="Сlick to edit">
        <User>
          <IconUser fill="currentColor" width="15px" height="15px" />
        </User>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </Select>
      <Del onClick={() => onDelete(id)} title="Сlick to delete">
        <IconDel fill="currentColor" width="15px" height="15px" />
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