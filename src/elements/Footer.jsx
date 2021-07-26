import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Footer = () => {
    return (
        <ContainerFooter>
            <p>Viajando Ando © 2021</p>
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