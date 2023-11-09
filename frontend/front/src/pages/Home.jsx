import React from 'react';
import {Link} from 'react-router-dom';
import PersonList from '../components/PersonList.jsx';

export default function Home(){
    return (
        <div className="home">
            <Link to="/add/" > REGISTRAR NOVA PESSOA </Link>
            <PersonList/> 
        </div>
    )
}