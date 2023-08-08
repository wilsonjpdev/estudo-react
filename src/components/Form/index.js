import './Form.css';
import TextField from '../TextField';
import DropDownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';

const Form = () => {

    const times = [
        'Escola de programação',
        'Pront-End',
        'DevOps',
        'QA',
        'UX',
        'Mobile'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const onSave = (e) => {
        e.preventDefault()
        console.log('Form foi submetido', nome, cargo, imagem, time)
    }

    return (
        <section className='form-container'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    label="Nome"
                    placeholder="Digite o seu nome"
                    value={nome}
                    onAlter={value => setNome(value)}
                />
                <TextField
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    value={cargo}
                    onAlter={value => setCargo(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    onAlter={value => setImagem(value)}
                />
                <DropDownList
                    label="Time"
                    items={times}
                    value={time}
                    onAlter={value => setTime(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;