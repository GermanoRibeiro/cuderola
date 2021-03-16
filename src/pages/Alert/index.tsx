import React, { useContext } from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import AlertImg from "../../assets/images/8aUPov.gif";


// npm install react-hook-form yup @types/yup @hookform/resolvers


const Alert = () => {
     setTimeout(() => {
         window.location.href = '/tarefas';
     }, 2000);
    return (
        <div className="overlay">
            <div className="container4">
                <h1>Cadastro Concluído</h1>

            </div>

            <div className="vectorAlert">
                <img
                    src={AlertImg}
                    alt="Plataforma de tarefas"
                    className="vectorAlertImg"
                />
            </div>
        </div>
    );
}
export default Alert;