import React from 'react'
import axios from 'axios';

export default function DeleteButton( {id} ){
    const deleteHandler = (id) => {
        axios.delete(
            `http://localhost:8000/api/pessoas/${id}`
        ).then((res) => alert("Registro deletado com sucesso"))
    }

    return (
        <button onClick={ () => deleteHandler(id) }> DELETAR </button>
    )
}