import React from 'react';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';
import Logo from '../assets/images/viajando-ando.svg';
import Container from '../elements/Container';
import theme from '../theme';
import Button from '../elements/Button';
import {InputsContainer, Input} from '../elements/Inputs';

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login V-A</title>
            </Helmet>
            <Container>
                <FormLogin action="">
                    <img src={Logo} alt="Viajando Ando" title="viajando ando"/>
                    <InputsContainer>
                        <Input type="email" placeholder="Correo"/>
                        <Input type="password" placeholder="Contraseña"/>
                        <Button as="button" type="submit" >Ingresar</Button>
                    </InputsContainer>
                </FormLogin>
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