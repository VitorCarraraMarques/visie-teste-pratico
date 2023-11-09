import React from 'react';
import {Link, useParams} from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import useGetPersonDataById from '../hooks/useGetPersonDataById';


export default function Details(){
    let id_dict = useParams();
    let person = useGetPersonDataById(id_dict);
    
    return (
        <div className="person-details">
            <p className="person-details-nome">Nome: {person.nome}</p>
            <p className="person-details-rg"> RG: {person.rg}</p>
            <p className="person-details-cpf"> CPF: {person.cpf} </p>
            <p className="person-details-admissao"> Data Admissão: {person.data_admissao}</p>
            <p className="person-details-nascimento"> Data Nascimento: {person.data_nascimento} </p>
            <div className="person-details-buttons">
                <Link to={`/update/${id_dict.id}`}> Editar </Link>
                <DeleteButton className="person-details-buttons-delete" id={person.id_pessoa}/>
            </div>
        </div>
    )
}