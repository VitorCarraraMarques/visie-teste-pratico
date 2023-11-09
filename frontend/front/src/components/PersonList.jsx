import React from 'react'

import PersonItem from './PersonItem.jsx'
import useGetPeopleData from '../hooks/useGetPeopleData.jsx'

export default function PersonList() {
	let people = useGetPeopleData([{}]); 

	return (
		<div className="person-list">
			{people?.map((person) => (
				<PersonItem key={person.id_pessoa} person={person} />
            ))}
		</div> 
	)

}