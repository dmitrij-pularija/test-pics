import PropTypes from 'prop-types';
// import { LoaderSmall } from 'components/Loader/Loader';
// import { useSelector } from 'react-redux';
// import { selectContactID, selectIsLoading } from '../../redux/selectors';
import { ReactComponent as IconDel } from '../../img/del.svg';
import { ReactComponent as IconUser } from '../../img/user-circle.svg';
import { Item, Name, Number, Del, User, Select } from './ContactList.styled';

const ContactListItem = ({ id, name, phone, onDelete, onEdit }) => {
  // const isLoading  = useSelector(selectIsLoading);
  // const selectID  = useSelector(selectContactID);

  
  return (
    <Item>
      <Select onClick={() => onEdit(id)} title="Сlick to edit">
        <User>
          <IconUser fill="currentColor" width="15px" height="15px" />
        </User>
        <Name>{name}</Name>
        <Number>{phone}</Number>
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
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ContactListItem;

// isLoading && selectID === id ? <LoaderSmall /> :
// <Del onClick={() => onDelete(id)} title="Сlick to delete">
//   <IconDel fill="currentColor" width="15px" height="15px" />
// </Del>