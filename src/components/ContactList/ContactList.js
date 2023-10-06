import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const getСontactByFilter = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getСontactByFilter(contacts, filter);
  return (
    <List>
      {visibleContacts?.map(contact => (
        <ListItem key={contact.id}>
          <ContactItem contact={contact} />
        </ListItem>
      ))}
    </List>
  );
};
