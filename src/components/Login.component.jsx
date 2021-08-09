import React, {useState} from 'react';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';
import Logo from '../assets/images/viajando-ando.svg';
import Container from '../elements/Container';
import theme from '../theme';
import Button from '../elements/Button';
import {InputsContainer, Input} from '../elements/Inputs';
import { projectAuth } from '../firebase/firebaseConfig';
import { useHistory } from 'react-router-dom';
import Alerta from '../elements/Alert';

const Login = () => {

    const history = useHistory();

    const [email, setEmail]=useState('');
    const [pass, setPass]=useState('');
    const [alertState, setAlertState]=useState(false);
    const [alertInfo, setAlertInfo]=useState({});

    const handleChange = async (e)=>{
        if( e.target.name === 'email' ){
            setEmail(e.target.value);
        }else if( e.target.name === 'pass' ){
            setPass(e.target.value);
        }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setAlertState(false);
        setAlertInfo({});

        //comprobamos del lado del cliente que el correo sea valido
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
        if( !expresionRegular.test(email) ){
            setAlertState(true);
            setAlertInfo({
                tipo: 'error',
                mensaje: 'Ingresa un correo valido'
            });
            return;
        }

        if( email === '' || pass === '' ){
            setAlertState(true);
            setAlertInfo({
                tipo: 'error',
                mensaje: 'Rellana todos los campos'
            })
            return;
        }

        try{
            await projectAuth.signInWithEmailAndPassword(email, pass);
            console.log('Acceso concedido');
            history.push('/home');
        }catch(error){
            setAlertState(true);
            let mensaje;
            switch(error.code){
                case 'auth/wrong-password':
                    mensaje = 'La contraseña no es correcta.'
                    break;
                case 'auth/user-not-found':
                    mensaje = 'No se encontro ninguna cuenta con este correo electronico.'
                break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta.'
                break;
            }
            setAlertInfo({
                tipo: 'error',
                mensaje: mensaje
            });
        }

    }

    return (
        <>
            <Helmet>
                <title>Login V-A</title>
            </Helmet>
            <Container>
                <FormLogin onSubmit={handleSubmit} >
                    <img src={Logo} alt="Viajando Ando" title="viajando ando"/>
                    <InputsContainer>
                        <Input type="email" placeholder="Correo" name="email" value={email} onChange={handleChange} />
                        <Input type="password" placeholder="Contraseña" name="pass" value={pass} onChange={handleChange} />
                        <Button as="button" type="submit" >Ingresar</Button>
                    </InputsContainer>
                </FormLogin>
                <Alerta tipo={alertInfo.tipo} mensaje={alertInfo.mensaje} estadoAlerta={alertState} cambiarEstadoAerta={setAlertState} />
            </Container>
        </>
    );
}

const FormLogin = styled.form`
    width: 70%;
    display: flex;
    padding: 12px 24px;
    gap: 50px;
    border-radius: 8px;
    box-shadow: 0px 5px 10px ${theme.sombra};
    img{
        width: 170px;
        margin-bottom: 12px;
    }
`;

export default Login;