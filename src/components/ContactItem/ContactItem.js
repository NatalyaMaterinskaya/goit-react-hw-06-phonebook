import PropTypes from 'prop-types';
import { Text, Btn } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ contact: {id, name, number } }) => {
  const dispach = useDispatch();

  const handleDelete = () => dispach(deleteContact(id));

  return (
    <>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <Btn type="button" onClick={handleDelete}>
        Delete
      </Btn>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};
