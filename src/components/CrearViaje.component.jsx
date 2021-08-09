import React, {useState, useContext, useEffect} from 'react';
import {Form, BtnContainer} from '../elements/Form';
import {InputsContainer, Input, Message} from '../elements/Inputs';
import Button from '../elements/Button';
import Select from '../elements/Select';
import File from '../elements/File';
import DatePicker from '../elements/DatePicker';
import {ContextCategoria} from '../Context/categoriaContext';
import getUnixTime from 'date-fns/getUnixTime';
import { ContextFile } from '../Context/fileContext';
import ProgressBar from '../elements/progressBar';
import useStorage from '../hooks/useStorage';

const CrearViaje = () => {

    const [place, setPlace]=useState('');
    const {categoria, selectedCategoria}=useContext(ContextCategoria);
    const {file, setFile, ready, setReady}=useContext(ContextFile);
    const [date, changedate]=useState(new Date());
    const [description, setDescription]=useState('');
    
    useEffect(()=>{
        if(ready === false){
            setPlace('');
            selectedCategoria(null);
            changedate(new Date());
            setDescription('');
        }
    }, [ready, selectedCategoria]);

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
                    <DatePicker date={date} changeDate={changedate} />
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