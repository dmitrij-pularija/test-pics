// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from './ContactListItem';
import { Loader}  from '../Loader/Loader';
import { delContact } from '../../redux/contacts/operations';
import { modalState, selectContact } from '../../redux/status/slice';
// import { Report } from 'notiflix/build/notiflix-report-aio';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { filterContacts } from '../../redux/status/selectors';
// import { selectErrors } from '../../redux/auth/selectors';
import { List } from './ContactList.styled';
// import { useAuth } from '../../services/hooks';
import Notification from '../Notification/Notification';

const ContactList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  // const errors = useSelector(selectErrors);
  // const  isLoggedIn  = useAuth();


  // useEffect(() => {
  //   dispatch(getContacts());
  // //   if (error) {
  // //     Report.failure('Something went wrong!', `${error}`, 'OK');
  // //   }
  // }, [dispatch]);

  const deleteContact = id => dispatch(delContact(id));
  // const deleteContact = id => {
  //   dispatch(selectContact(id));
  //   dispatch(delContact(id));
  // }
  const editContact = id => {
    dispatch(selectContact(id));
    dispatch(modalState());
  };
  const isLoading = useSelector(selectIsLoading);
  // const selectID  = useSelector(selectContactID);
  const contactFiltred = useSelector(filterContacts);

  return (
    <List>
      {isLoading && <Loader />}
      {contactFiltred.length && !isLoading
        ? contactFiltred.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              phone={number}
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