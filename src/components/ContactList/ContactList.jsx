import { useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import { List } from './ContactList.styled';
import ContactListItem from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import Notification from '../Notification/Notification';
import { delContact } from '../../redux/contacts/operations';
import { resetIsFulfilled } from '../../redux/contacts/slice';
import { getContacts } from '../../redux/contacts/operations';
import { modalState, selectContact } from '../../redux/status/slice';
import { filterContacts, selectContactID } from '../../redux/status/selectors';
import {
  selectError,
  selectIsLoading,
  selectIsFulfilled,
} from '../../redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isFulfilled = useSelector(selectIsFulfilled);
  const isLoading = useSelector(selectIsLoading);
  const selectID = useSelector(selectContactID);
  const contactFiltred = useSelector(filterContacts);

  useEffect(() => {
    !isFulfilled && dispatch(getContacts());
  }, [dispatch, isFulfilled]);

  const deleteContact = id => {
    dispatch(selectContact(id));
    dispatch(delContact(id)).finally(() =>
      setTimeout(() => {
        dispatch(selectContact(''));
        dispatch(resetIsFulfilled());
      }, 800)
    );
  };

  const editContact = id => {
    dispatch(selectContact(id));
    dispatch(modalState());
  };

  return (
    <List>
      {isLoading && !selectID ? (
        <Loader />
      ) : contactFiltred.length ? (
        contactFiltred.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            phone={number}
            onDelete={deleteContact}
            onEdit={editContact}
          />
        ))
      ) : (
        !isLoading && (
          <Notification
            message={
              error
                ? 'Something went wrong, please try again.'
                : 'Contacts not found'
            }
          />
        )
      )}
    </List>
  );
};

export default ContactList;