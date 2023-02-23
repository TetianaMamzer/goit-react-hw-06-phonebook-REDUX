import { ADD_CONTACT, DELETE_CONTACT } from './types';

const initialState = {
  filter: '',
  contacts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContact = [...state.contacts, action.payload];
      return {
        ...state,
        contacts: newContact,
      };
    case DELETE_CONTACT:
      const deleteContact = state.contacts.filter(item => item.id !== action.payload);
      return { 
        ...state, 
        contacts: deleteContact 
      };

    default:
      return state;
  }
};

export default reducer;
