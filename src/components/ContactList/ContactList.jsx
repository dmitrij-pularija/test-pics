import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from './ContactListItem';
import { delContact } from '../../redux/contactSlice';
import { selectContact } from '../../redux/selectSlice';
import { modalState } from '../../redux/modalSlice';
import { List } from './ContactList.styled';
import Notification from '../Notification/Notification';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  const deleteContact = id => dispatch(delContact(id));
  const editContact = id => {
    dispatch(selectContact(id));
    dispatch(modalState());
  };

  const filterContacts = () => {
    const filtredContacts = contacts.filter(
      contact =>
        contact.name.toUpperCase().includes(filter.toUpperCase()) ||
        contact.number.includes(filter)
    );
    return filtredContacts.sort((firstСontacts, secondСontacts) =>
      firstСontacts.name.localeCompare(secondСontacts.name)
    );
  };

  const contactFiltred = filterContacts();
  return (
    <>
      {contactFiltred.length > 0 ? (
        <List>
          {contactFiltred.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={deleteContact}
              onEdit={editContact}
            />
          ))}
        </List>
      ) : (
        <Notification message="contacts not found" />
      )}
    </>
  );
};

export default ContactList;