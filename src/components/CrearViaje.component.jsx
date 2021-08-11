import React, {useContext, useEffect, useState} from 'react';
import {Form, BtnContainer} from '../elements/Form';
import {InputsContainer, Input, Message} from '../elements/Inputs';
import Button from '../elements/Button';
import Select from '../elements/Select';
import File from '../elements/File';
import DatePicker from '../elements/DatePicker';
import getUnixTime from 'date-fns/getUnixTime';
import ProgressBar from '../elements/progressBar';
import useStorage from '../hooks/useStorage';
import { ContextFile } from '../Context/fileContext';
import {ContextCategoria} from '../Context/categoriaContext';

const CrearViaje = () => {

    const [place, setPlace]=useState('');
    const {categoria, selectedCategoria}=useContext(ContextCategoria);
    const {file, setFile, ready, setReady}=useContext(ContextFile);
    const [date, changeDate]=useState(new Date());
    const [description, setDescription]=useState('');

    useEffect(()=>{
        if(ready === false){
            setPlace('');
            selectedCategoria(null);
            changeDate(new Date());
            setDescription('');
            setFile(null);
        }
    }, [ready, selectedCategoria, setFile]);

    const handleChange = (e)=>{
        if(e.target.name === 'place'){
            setPlace(e.target.value);
        }else if(e.target.name === 'description'){
            setDescription(e.target.value);
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setReady(true);
    }

    return (
        <>
        <Form onSubmit={handleSubmit} >
            <InputsContainer>
                <Input placeholder="¿A donde vas?" name='place' value={place} onChange={handleChange}/>
                <BtnContainer>
                    <Select/>
                    <File/>
                    <DatePicker date={date} changeDate={changeDate} />
                </BtnContainer>
                { file && <ProgressBar file={file} setFile={setFile} place={place} categoria={categoria} date={getUnixTime(date)} description={description} ready={ready} setReady={setReady} action={useStorage} />}
                <Message placeholder="Descripción..." name="description" value={description} onChange={handleChange} />
            </InputsContainer>
            <Button as="button" large >Crear Viaje</Button>
        </Form>
        </>
    );
}
 
export default CrearViaje;