import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import Filter from '../Filter/Filter';
import { selectError } from '../../redux/contacts/selectors';
import { selectModalState } from '../../redux/status/selectors';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { List } from './ContactsEditor.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
// import { getContacts } from '../../redux/operations';

const ContactsEditor = () => {
  // const dispatch = useDispatch()
  const error = useSelector(selectError);
  const modalShow = useSelector(selectModalState);

  useEffect(() => {
    // dispatch(getContacts());
    error && Report.failure('Error:', `${error}`, 'OK');
  }, [ error ])
  

  return (
    <>
<List>
<Filter />
<ContactList />
</List>
{modalShow && (
  <Modal>
    <ContactForm />
  </Modal>
)}
</>
    );
};

export default ContactsEditor;
