import React, {useState} from 'react'
import {Form, BtnContainer} from '../elements/Form';
import {InputsContainer, Input, Message} from '../elements/Inputs';
import File from '../elements/File';
import Button from '../elements/Button';

const CrearOferta = () => {

    const [oferta, setOferta]=useState('');
    const [description, setDescription]=useState('');

    const handleChange = (e)=>{
        if( e.target.name === 'oferta' ){
            setOferta(e.target.value);
        }else if( e.target.name === 'description' ){
            setDescription(e.target.value);
        }
    }

    return (  
        <Form>
            <InputsContainer>
                <Input placeholder="Viaje en oferta" name="oferta" value={oferta} onChange={handleChange} />
                <BtnContainer>
                    <File/>
                </BtnContainer>
                <Message placeholder="Descripción de la oferta..." name="description" value={description} onChange={handleChange} />
            </InputsContainer>
            <Button as="button" large >Crear Oferta</Button>
        </Form>
    );
}
 
export default CrearOferta;