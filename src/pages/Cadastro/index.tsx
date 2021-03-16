import Header from "../../components/Header";
import React, { useContext } from 'react';
import { TarefaContext } from '../../contexts/TarefaContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { TarefaContextType } from '../../contexts/TarefaContextType';
import { Link } from 'react-router-dom';



// npm install react-hook-form yup @types/yup @hookform/resolvers

const schema = yup.object().shape({
    nome: yup.string().required('Nome inválido'),
    data: yup.date().required('Data inválida'),
    descricao: yup.string().required('Descricao inválida'),
});

interface AddTarefaForm {
    nome: string,
    data: Date,
    descricao: string

}

const AddTarefa = () => {
    const { addTarefa } = useContext<TarefaContextType>(TarefaContext);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });



    const onSubmit = (data: AddTarefaForm, e: any) => {
        addTarefa(data.nome, data.data, data.descricao);
        e.target.reset();

        window.location.href = '/Alert';       

    }

    return (

        <form onSubmit={handleSubmit<AddTarefaForm>(onSubmit)}>
            <div className="container ">
                <Header></Header>
                <div className="row">
                    <div className="d-flex justify-content-end">
                        <div className="mb-4" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ color: "green" }} fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                            </svg>
                            <Link to="/tarefas" > Minhas tarefa</Link>
                        </div>
                    </div>
                </div>
                <div className="rounded p-3 mb-2 bg-light text-dark">
                    <h1>Cadastro dat Tarefa</h1>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-4">
                                <input type="text" name="nome" id="nome" placeholder="Nome:" className="form-control form-control-lg" ref={register} />
                                <span><small><strong >{errors.nome?.message}</strong></small></span>
                            </div>

                        </div>

                        <div className="col-6">
                            <div className="mb-4">
                                <input type="date" name="data" id="data" placeholder="Data:" className="form-control form-control-lg" ref={register} />
                                <span><small><strong >{errors.data?.message}</strong></small></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-4">
                                <textarea name="descricao" id="descricao" placeholder="Descrição:" className="form-control form-control-lg" ref={register} />
                                <span><small><strong >{errors.descricao?.message}</strong></small></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex justify-content-end">
                            <div className="mb-4">
                                <button type="submit" className="btn btn-success">Cadastrar Tarefa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddTarefa;