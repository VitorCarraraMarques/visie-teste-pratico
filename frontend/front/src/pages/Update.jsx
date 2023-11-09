import axios from 'axios'; 
import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import useGetPersonDataById from '../hooks/useGetPersonDataById';


export default function Update(){
    let [nome, setNome] = useState('');
    let [rg, setRg] = useState('');
    let [cpf, setCpf] = useState('');
    let [admissao, setAdmissao] = useState('');
    let [nascimento, setNascimento] = useState('');

    let id_dict = useParams(); 
    let person = useGetPersonDataById(id_dict); 

    useEffect(() => {
        setNome(person.nome); 
        setRg(person.rg); 
        setCpf(person.cpf);
        setAdmissao(person.data_admissao);
        setNascimento(person.data_nascimento);
    }, [person])

    function update(e){
        e.preventDefault();
        
        let personDataRequest = {
            "nome": nome, 
            "rg": rg, 
            "cpf": cpf, 
            "data_admissao": admissao, 
            "data_nascimento": nascimento
        }

        axios.put(
            `http://localhost:8000/api/pessoas/${id_dict.id}`, 
            personDataRequest
        ).then(
            (res) => {alert('Registro atualizado com sucesso')}
        )
    }
    
    return (
        <form className="person-update" onSubmit={update}>
            <input className="person-update-nome" name="nome" defaultValue={person.nome}  
                onChange={(e) => setNome(e.target.value)}/> 
            <input className="person-update-rg" name="rg" defaultValue={person.rg} 
                onChange={(e) => setRg(e.target.value)}/>
            <input className="person-update-cpf" name="cpf" defaultValue={person.cpf} 
                onChange={(e) => setCpf(e.target.value)}/>
            <input className="person-update-admissao" name="data_admissao" defaultValue={person.data_admissao}
                onChange={(e) => setAdmissao(e.target.value)}/>
            <input className="person-update-nascimento" name="data_nascimento" defaultValue={person.data_nascimento} 
                onChange={(e) => setNascimento(e.target.value)}/>
            <div className="person-update-buttons">
                <button type="submit" > Editar </button>
                <DeleteButton className="person-details-buttons-delete" id={person.id_pessoa}/>
                <Link to="/"> CANCELAR </Link>
            </div>
        </form>
    )
}