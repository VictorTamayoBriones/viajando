import React, {useState, useContext, useEffect} from 'react';
import {Form, BtnContainer} from '../elements/Form';
import {InputsContainer, Input, Message} from '../elements/Inputs';
import Button from '../elements/Button';
import Select from '../elements/Select';
import File from '../elements/File';
import DatePicker from '../elements/DatePicker';
import {ContextCategoria} from '../Context/categoriaContext';
import {ContextFile} from '../Context/fileContext';
import addTravel from '../firebase/addTravel';
import getUnixTime from 'date-fns/getUnixTime';
import ProgressBar from '../elements/ProgressBar';

const CrearViaje = () => {

    const [place, setPlace]=useState('');
    const {categoria, selectedCategoria}=useContext(ContextCategoria);
    const {file, setFile}=useContext(ContextFile);
    const [date, changedate]=useState(new Date());
    const [description, setDescription]=useState('');

    const handleChange = (e)=>{
        if(e.target.name === 'place'){
            setPlace(e.target.value);
        }else if(e.target.name === 'description'){
            setDescription(e.target.value);
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(place !== '' && description !== ''){

            addTravel({
                place: place,
                categoria: categoria,
                url: file.name,
                date: getUnixTime(date),
                description: description
            }).then(()=>{
                alert('Viaje Creado');
                setPlace('');
                selectedCategoria(null);
                setFile(null);
                changedate(new Date());
                setDescription('');
            }).catch((err)=>{
                alert(err);
            })
    
        }

    }

    return (
        <>
        <Form onSubmit={handleSubmit} >
            <InputsContainer>
                <Input placeholder="¿A donde vas?" name='place' value={place} onChange={handleChange}/>
                <BtnContainer>
                    <Select/>
                    <File/>
                    <DatePicker date={date} changeDate={changedate} />
                </BtnContainer>
                {file && <ProgressBar/>}
                <Message placeholder="Descripción..." name="description" value={description} onChange={handleChange} />
            </InputsContainer>
            <Button as="button" large >Crear Viaje</Button>
        </Form>
        </>
    );
}
 
export default CrearViaje;