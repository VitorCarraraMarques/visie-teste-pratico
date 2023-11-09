import React from 'react';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';

export default function PersonItem( {person} ){
	
	
	return (
		<div className="person-item"> 
			<div className="person-item-data"> 
				<div className="person-item-data-name"> 
					<span> Nome: {person.nome} </span>
				</div> 
				<div className="person-item-data-date"> 
					<span> Admissão: {person.data_admissao} </span>
                </div>
            </div> 

			<div className="person-item-buttons">
				<Link className="person-item-buttons-more" to={`details/${person.id_pessoa}`}> SAIBA MAIS </Link>  
				<Link className="person-item-buttons-edit" to={`update/${person.id_pessoa}`}> EDITAR </Link>
				<DeleteButton className="person-item-buttons-delete" id={person.id_pessoa}/>
			</div>

		</div>
        
	)
}