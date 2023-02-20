import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from './ContactListItem';
import Loader from '../Loader/Loader';
import { getContacts, delContact } from '../../redux/operations';
import { modalState, selectContact } from '../../redux/statusSlice';
import { Report } from 'notiflix/build/notiflix-report-aio';
import {
  selectError,
  selectIsLoading,
  filterContacts,
} from '../../redux/selectors';
import { List } from './ContactList.styled';
import Notification from '../Notification/Notification';

const ContactList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
    if (error) {
      Report.failure('Something went wrong!', `${error}`, 'OK');
    }
  }, [dispatch, error]);

  const deleteContact = id => dispatch(delContact(id));
  const editContact = id => {
    dispatch(selectContact(id));
    dispatch(modalState());
  };
  const isLoading = useSelector(selectIsLoading);
  const contactFiltred = useSelector(filterContacts);

  return (
    <List>
      {isLoading && <Loader />}
      {contactFiltred.length && !isLoading
        ? contactFiltred.map(({ id, name, phone }) => (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              phone={phone}
              onDelete={deleteContact}
              onEdit={editContact}
            />
          ))
        : !isLoading && (
            <Notification
              message={
                error
                  ? 'Something went wrong, please try again.'
                  : 'Contacts not found'
              }
            />
          )}
    </List>
  );
};

export default ContactList;