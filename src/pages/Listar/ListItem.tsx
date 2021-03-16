import React, { useContext } from 'react';
import { Tarefa } from '../../models/Tarefa';
import { TarefaContextType } from '../../contexts/TarefaContextType';
import { TarefaContext } from '../../contexts/TarefaContext';


interface TarefaListItemProps {
    tarefa: Tarefa
}

const TarefaListItem = (props: TarefaListItemProps) => {
    const { removeTarefa, toggle } = useContext<TarefaContextType>(TarefaContext);

    const onRemove = (tarefa: Tarefa) => {
        removeTarefa(tarefa);
    }

    const handleChange = (event: any) => {
        toggle(props.tarefa);
    }

    return (

        <div  >
            <div className="rounded-top p-3 mb-1 bg-white text-dark">
                <div className="row">
                    <div className="col-1">
                        <input className="uk-checkbox"
                            type="checkbox"
                            checked={props.tarefa.done}
                            onChange={handleChange} />
                    </div>
                    <div className="col-2">
                        
                    {props.tarefa.data.toString().split('-')[2].split('T')[0] + "/" + props.tarefa.data.toString().split('-')[1] + "/" + props.tarefa.data.toString().split('-')[0]}
                    </div>
                    <div className="col-9">
                        {props.tarefa.nome}
                    </div>
                </div>
            </div>

            <div className="rounded-bottom p-3 mb-3 bg-light text-dark">
                <div className="row">
                    <div className="col-11">
                        {props.tarefa.descricao}
                    </div>
                    <div className="col-1 d-flex justify-content-end">
                        <button style={{ border: "none", background: "none" }}
                            onClick={() => onRemove(props.tarefa)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg></button>
                    </div>
                </div>


            </div>
        </div>





        /*         <tr className="uk-animation-slide-bottom-medium">
                    <td className="uk-width-auto">
                        <label>
                            <input className="uk-checkbox"
                                type="checkbox"
                                checked={props.tarefa.done}
                                onChange={handleChange} />
                        </label>
                    </td>
                    <td className="uk-width-expand">
                        {props.tarefa.nome}
                    </td>
                    <td className="uk-width-expand">
                        {props.tarefa.data}
                    </td>
                    <td className="uk-width-expand">
                        {props.tarefa.descricao}
                    </td>
                    <td className="uk-width-auto">
                        <button
                            className="uk-icon-button uk-button-danger"
                            uk-icon="trash"
                            onClick={() => onRemove(props.tarefa)}></button>
                    </td>
                </tr> */
    );
}

export default TarefaListItem;