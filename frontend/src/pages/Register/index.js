import React from 'react';
import './styles.css';

import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";

export default function Register() {
   return (
       <div className="register-container">
           <div className="content">
            <section>
                <img src = {logoImg} alt = "Be The Heros" />
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>
            
                <Link className="back-link" to="/">
                    <FiArrowLeft size = {16} color ="#E02041" /> 
                    Não tenho cadastro
                </Link>
            </section>
            
            <form>
            <input placeholder="Nome da ONG"/>
            <input type="email" placeholder="E-mail"/>
            <input type="WhatsApp" placeholder="WhatsApp"/>

            <div className="input-group">
                <input placeholder="Cidade"/>
                <input placeholder="UF" style = {{ width : 80 }} />
            </div>

            <button className="button" type="submit">Cadestrar</button>
            </form>
           </div>
       </div>
   );
}