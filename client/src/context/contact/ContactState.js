import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_ALERT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 'Jill Johnson',
				name: 'jill@gmail.com',
				phone: '111-111-1111',
				type: 'personal',
			},
			{
				id: 'Sara Watson',
				name: 'sara@gmail.com',
				phone: '222-222-2222',
				type: 'personal',
			},
			{
				id: 'Harry White',
				name: 'harry@gmail.com',
				phone: '333-333-3333',
				type: 'professionial',
			},
		],
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Add Contact

	// Delete Contact

	// Set Current Contact

	// Update Contact

	// Filter Contacts

	// Clear Filter

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
