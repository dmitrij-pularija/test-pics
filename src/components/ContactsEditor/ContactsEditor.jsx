import Modal from '../Modal/Modal';
import Form from 'moduls/form/Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { Container, List } from './ContactsEditor.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { initialContactForm } from '../../services/initial';
import { resetIsFulfilled } from '../../redux/contacts/slice';
import { selectContacts } from '../../redux/contacts/selectors';
import { modalState, selectContact } from '../../redux/status/slice';
import { addContact, editContact } from '../../redux/contacts/operations';
import {
  selectContactID,
  selectModalState,
} from '../../redux/status/selectors';

const ContactsEditor = () => {
  const dispatch = useDispatch();
  const selectID = useSelector(selectContactID);
  const contacts = useSelector(selectContacts);
  const modalShow = useSelector(selectModalState);

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
      dispatch(editContact({ id: selectID, name, number })).then(
        ({ error }) => !error && clearForm(resetForm)
      );
    } else {
      dispatch(addContact({ name, number })).then(
        ({ error }) => !error && clearForm(resetForm)
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