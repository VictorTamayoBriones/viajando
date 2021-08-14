import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { useHistory } from 'react-router';

const Footer = () => {

    const history = useHistory();

    return (
        <ContainerFooter>
            <p onClick={()=>history.push('/login')} >Viajando Ando © 2021</p>
        </ContainerFooter>
    );
}

const ContainerFooter = styled.footer`
    width: 100%;
    background: ${theme.negro};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.blanco};
    margin: 20px 0px 0px 0px;
    padding: 12px;
`;

export default Footer;