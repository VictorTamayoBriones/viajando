import React, {useState, useContext} from 'react'
import {Form, BtnContainer} from '../elements/Form';
import {InputsContainer, Input, Message} from '../elements/Inputs';
import File from '../elements/File';
import Button from '../elements/Button';
import { ContextFile } from '../Context/fileContext';
import ProgressBar from '../elements/progressBar';
import useStorage from '../hooks/useStorage';

const CrearOferta = () => {

    const [oferta, setOferta]=useState('');
    const [description, setDescription]=useState('');

    const {file, setFile, ready, setReady}=useContext(ContextFile);

    const handleChange = (e)=>{

        if( e.target.name === 'oferta' ){
            setOferta(e.target.value);
        }else if( e.target.name === 'description' ){
            setDescription(e.target.value);
        }
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setReady(true);
    }

    return (  
        <Form onSubmit={handleSubmit} >
            <InputsContainer>
                <Input placeholder="Viaje en oferta" name="oferta" value={oferta} onChange={handleChange} />
                <BtnContainer>
                    <File/>
                </BtnContainer>
                { file && <ProgressBar file={file} setFile={setFile} place={oferta} description={description} ready={ready} setReady={setReady} action={useStorage} galery={true} />}
                <Message placeholder="Descripción de la oferta..." name="description" value={description} onChange={handleChange} />
            </InputsContainer>
            <Button as="button" large >Crear Oferta</Button>
        </Form>
    );
}
 
export default CrearOferta;