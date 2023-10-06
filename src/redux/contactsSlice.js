import { createSlice, nanoid } from '@reduxjs/toolkit';
import { isExist } from 'helpers';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
      addContact: {
            reducer (state, action){
               if (isExist(state, action.payload)) {
                 alert(`${action.payload.name} is already in contacts.`);
                 return;
               }
               state.push(action.payload);
          },
          prepare(name,number) {
              return {
                payload: {
                  name,
                  number,
                  id:nanoid(),
                },
              };
          }
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;