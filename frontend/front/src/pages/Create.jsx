import React, {useState} from 'react';
import axios from 'axios';

export default function Create(){
    let [nome, setNome] = useState('');
    let [rg, setRg] = useState('');
    let [cpf, setCpf] = useState('');
    let [admissao, setAdmissao] = useState('');
    let [nascimento, setNascimento] = useState('');

    function create(e){
        e.preventDefault(); 

        let personDataRequest = {
            "nome": nome, 
            "rg": rg, 
            "cpf": cpf, 
            "data_admissao": admissao, 
            "data_nascimento": nascimento
        }
        
        axios.post(
            `http://localhost:8000/api/pessoas/`, 
            personDataRequest
        ).then(
            (res) => alert("Registro criado com sucesso")
        )
    }
    
    return (
        <form className="person-update" onSubmit={create}>
            <input className="person-update-nome" type="text" name="nome"  placeholder="Nome" 
                onChange={(e) => setNome(e.target.value)}/> 
            <input className="person-update-rg" type="text" name="rg"  placeholder="RG"
                onChange={(e) => setRg(e.target.value)}/>
            <input className="person-update-cpf" type="text" name="cpf"  placeholder="CPF"
                onChange={(e) => setCpf(e.target.value)}/>
            <input className="person-update-admissao" type="text" name="data_admissao" placeholder="Data de Admissão"
                onChange={(e) => setAdmissao(e.target.value)}/>
            <input className="person-update-nascimento" type="text" name="data_nascimento" placeholder="Data de Nascimento" 
                onChange={(e) => setNascimento(e.target.value)}/>
            <button className="person-update-button" type="submit" > REGISTRAR PESSOA </button>
        </form>
    )
}