import React, { useContext } from 'react';
import ListItem from './ListItem';
import { TarefaContextType } from '../../contexts/TarefaContextType';
import { TarefaContext } from '../../contexts/TarefaContext';
import Header from "../../components/Header";
import { Link } from 'react-router-dom';

const TarefaList = () => {
    const { tarefas } = useContext<TarefaContextType>(TarefaContext);
    return (

        <div className="container">
            <Header></Header>
            
                <div className="d-flex justify-content-end">
                    <div className="mb-4" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ color: "green" }} fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                        </svg>
                        <Link to="/" > Voltar para o inicio</Link>
                    </div>
                </div>
           
            <div >
                {
                    tarefas?.map(
                        tarefa => (<ListItem key={tarefa.id} tarefa={tarefa}></ListItem>)
                    )
                }
            </div>
        </div>

    );
}

export default TarefaList;