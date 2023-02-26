import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { initialContactForm } from '../../services/initial';
import { useSelector, useDispatch } from 'react-redux';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { addContact, editContact } from '../../redux/contacts/operations';
import { modalState, selectContact } from '../../redux/status/slice';
import { selectContacts, selectContactID, selectModalState } from '../../redux/status/selectors';
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';
import Form from 'moduls/form/Form';
import { Container } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const selectID = useSelector(selectContactID);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const modalShow = useSelector(selectModalState);
  const error = useSelector(selectError);


  const initialState = () => {
    if (selectID) {
      const selectedContact = contacts.find(contact => contact.id === selectID);
      return selectedContact;
    } else {
      return initialContactForm;
    }
  };

  useEffect(() => {
    if (!isLoading && modalShow && !error) {
      dispatch(modalState());
    };
  }, [ dispatch, isLoading, error, modalShow]);


  const handleSubmit = ({ name, number }) => {
    const dublName = contacts.find(
      contact => contact.name.toUpperCase() === name.toUpperCase()
    );
    const dublNumber = contacts.find(contact => contact.number === number);
    if (messageDubl(dublName, name, 'name')) return;
    if (messageDubl(dublNumber, number, 'phone nmber')) return;
    if (selectID) {
      const newContact = { id: selectID, name, number };
      dispatch(editContact(newContact));
      dispatch(selectContact(''));
    } else {
      const newContact = { id: nanoid(), name, number };
      dispatch(addContact(newContact));
    }
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

  return (
    <Container>
    <Form initialState={initialState()} onSubmit={handleSubmit} mode={selectID ? 'edit' : 'add'} />
    </Container>
  );
};

export default ContactForm;