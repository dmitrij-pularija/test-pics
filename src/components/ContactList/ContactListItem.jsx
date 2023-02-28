import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { LoaderSmall } from '../../components/Loader/Loader';
import { ReactComponent as IconDel } from '../../img/del.svg';
import { selectContactID } from '../../redux/status/selectors';
import { ReactComponent as IconCheck } from '../../img/check.svg';
import { ReactComponent as IconUser } from '../../img/user-circle.svg';
import { Item, Name, Number, Del, User, Select } from './ContactList.styled';
import {
  selectIsFulfilled,
  selectIsLoading,
} from '../../redux/contacts/selectors';

const ContactListItem = ({ id, name, phone, onDelete, onEdit }) => {
  const isLoading = useSelector(selectIsLoading);
  const selectID = useSelector(selectContactID);
  const isFulfilled = useSelector(selectIsFulfilled);

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
        {id === selectID && isLoading ? (
          <LoaderSmall color={'#f32013'} />
        ) : isFulfilled && id === selectID ? (
          <IconCheck fill="#f32013" width="20px" height="20px" />
        ) : (
          <IconDel fill="currentColor" width="15px" height="15px" />
        )}
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