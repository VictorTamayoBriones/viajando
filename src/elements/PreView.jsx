import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const PreView = (props) => {

    let fecha = props.date.toDateString();
    
    return (
        <Note>
            <h3>Datos del Viaje</h3>        
            <p>Lugar: <Data>{props.place}</Data></p>
            <p>Categoria: <Data>{props.categoria}</Data></p>
            <p>Foto: <Data>{props.file && props.file.name}</Data></p>
            <p>Fecha: <Data>{fecha}</Data></p>
            <p>Descripción: <Data>{props.description}</Data></p>
            
        </Note>
    );
}

const Note = styled.div`
    width: 40%;
    margin: 20px 0px 0px 10% ;
    background: ${theme.crema};
    color: ${theme.verde};
    border-radius: 8px;
    padding: 8px;
`;

const Data = styled.p`
    color: ${theme.grisOscuro}; 
    display: inline;
`;

export default PreView;