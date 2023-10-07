import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

 
export const App = () => {
 const contacts = useSelector(getContacts); 
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        margin: 40,
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm/>
        {contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            <Filter/>
            <ContactList/>
          </>
        )}
        <GlobalStyle />
      </div>
    </div>
  );
};
