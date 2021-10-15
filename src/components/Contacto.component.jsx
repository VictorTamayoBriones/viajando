import React, {useState} from 'react';
import Navbar from '../elements/Navbar.component';
import ContainerMedium from '../elements/ContainerMedium';
import TitleSection from '../elements/titleSection';
import {Form, DualContainer, SectionA, SectionB} from '../elements/Form';
import {InputsContainer, Input, Message} from '../elements/Inputs';
import Button from '../elements/Button';
import Helmet from 'react-helmet';
import addMail from '../firebase/addMail';

const Contacto = () => {

    const [name, setName]=useState('');
    const [tel, setTel]=useState('');
    const [email, setEmail]=useState('');
    const [message, setMessage]=useState('');

    const handleChange = (e)=>{
        if( e.target.name === 'name' ){
            setName(e.target.value);
        }else if( e.target.name === 'tel' ){
            setTel(e.target.value);
        }else if( e.target.name === 'email' ){
            setEmail(e.target.value);
        }else if( e.target.name === 'message' ){
            setMessage(e.target.value);
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if( name !== '' && tel !== '' && email !== '' && message !== '' ){
            addMail(name, tel, email, message, setName, setTel, setEmail, setMessage);
        }
    }

    return (
        <>
            <Helmet>
                <title>Contacto</title>
            </Helmet>
            <Navbar/>
            <ContainerMedium>
                <TitleSection center='center' >Contacto</TitleSection>
                <Form onSubmit={handleSubmit} >
                    <DualContainer>
                        <SectionA>
                            <InputsContainer>
                                <Input type="text" placeholder="Nombre"  name='name' value={name} onChange={handleChange} />
                                <Input type="text" placeholder="Telefono"  name='tel' value={tel} onChange={handleChange} />
                                <Input type="email" placeholder="Correo"  name='email' value={email} onChange={handleChange} />
                            </InputsContainer>
                        </SectionA>
                        <SectionB>
                            <InputsContainer>
                                <Message placeholder="Mensaje..." name='message' value={message} onChange={handleChange} />
                            </InputsContainer>
                        </SectionB>
                    </DualContainer>
                    <Button as="button" type="submit" large >Enviar</Button>
                </Form>
            </ContainerMedium>
        </>
    );
}

export default Contacto;