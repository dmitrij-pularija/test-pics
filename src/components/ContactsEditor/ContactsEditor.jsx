import { useEffect } from 'react';
import Modal from '../Modal/Modal';
import Form from 'moduls/form/Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { Container, List } from './ContactsEditor.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { initialContactForm } from '../../services/initial';
import { getContacts } from '../../redux/contacts/operations';
import { resetIsFulfilled } from '../../redux/contacts/slice';
import { modalState, selectContact } from '../../redux/status/slice';
import { addContact, editContact } from '../../redux/contacts/operations';
import { selectContacts, selectError } from '../../redux/contacts/selectors';
import { selectContactID, selectModalState } from '../../redux/status/selectors';

const ContactsEditor = () => {
  const dispatch = useDispatch();
  const selectID = useSelector(selectContactID);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const modalShow = useSelector(selectModalState);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    error && Report.failure('Error:', `${error}`, 'OK');
  }, [error]);

  const initialState = () => {
    if (selectID) {
      const selectedContact = contacts.find(contact => contact.id === selectID);
      return selectedContact;
    } else {
      return initialContactForm;
    }
  };

  const clearForm = resetForm => {
    setTimeout(() => {
      dispatch(modalState());
      dispatch(selectContact(''));
      dispatch(resetIsFulfilled());
      resetForm();
    }, 800);
  };

  const messageDubl = (dubl, field, name) => {
    if (dubl && dubl.id !== selectID) {
      Report.warning(
        `${field}`,
        `This ${name} is already in the contact list.`,
        'OK'
      );
      return true;
    } else return false;
  };

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const dublName = contacts.find(
      contact => contact.name.toUpperCase() === name.toUpperCase()
    );
    const dublNumber = contacts.find(contact => contact.number === number);
    if (messageDubl(dublName, name, 'name')) return;
    if (messageDubl(dublNumber, number, 'phone nmber')) return;
    if (selectID) {
      dispatch(editContact({ id: selectID, name, number })).finally(() => 
      clearForm(resetForm)
      );
    } else {
      dispatch(addContact({ name, number })).finally(() => 
      clearForm(resetForm)
    );
    }
  };

  return (
    <>
      <List>
        <Filter />
        <ContactList />
      </List>
      {modalShow && (
        <Modal>
          <Container>
            <Form
              initialState={initialState()}
              onSubmit={handleSubmit}
              mode={selectID ? 'edit' : 'add'}
            />
          </Container>
        </Modal>
      )}
    </>
  );
};

export default ContactsEditor;