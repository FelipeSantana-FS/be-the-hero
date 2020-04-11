import React from 'react';
import './styles.css';
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";
import { useState } from 'react';

export default function Logon() { 
    const [id, setId] = useState(''); // Guarda o estado da variavel id dentro de setId
    // Enviar usuario para a rota profile onde fica a listagem dos casos
    const history = useHistory();

   async function handlLogin(e){  // Função leva o id la pro backend
         // Verificar se a ong existe
        e.preventDefault(); // Evita o redirect

        try {
            const response = await api.post('session', {id}); 
            localStorage.setItem('ongId',  id ); // Salvando no historico denavegação, para ter disponivel en toda app
            localStorage.setItem('ongName', response.data.name);
            // Enviar usuario para a rota profile onde fica a listagem dos casos
            history.push('/profile');
        }catch (err)
        {
            alert('Falha no Login, tente novamente.');
        }

    }
 return (
    <div className="logon-container">
        <section className ="form">
            <img src = {logoImg} alt = "Be The Heros" />

            <form onSubmit = {handlLogin}>
                <h1>faça seu logon</h1>
                <input
                 placeholder = "Sua ID"
                 value = {id} // O valor de id
                 onChange = {e => setId(e.target.value)} // O estado recebe o valor de id
                />
                <button className = "button" type="submit">Entrar</button>
                <Link className="back-link" to="/register">
                    <FiLogIn size = {16} color ="#E02041" /> 
                    Não tenho cadastro
                </Link>
                
            </form>
        </section>
        <img src = {heroesImg} alt = "Heroes" />
    </div>
 );
}