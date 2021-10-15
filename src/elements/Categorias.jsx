import React, {useContext} from 'react';
import TitleSection from '../elements/titleSection';
import styled from 'styled-components';
import Categoria from '../elements/Categoria';
import { useHistory } from 'react-router';
import { ContextCategoria } from '../Context/categoriaContext';

const Categorias = () => {

    const history = useHistory();
    const {setCategoriaHome}=useContext(ContextCategoria);

    const handleCategoria = (categoria)=>{
        setCategoriaHome(categoria);
        history.push('/categoria'+categoria);
    }

    return (
        <>
            <TitleSection>Categorias</TitleSection>
            <CategoriasContainer>
                <Categoria onClick={()=>handleCategoria('ciudad')} >Ciudad</Categoria>
                <Categoria onClick={()=>handleCategoria('playa')} >Playa</Categoria>
                <Categoria onClick={()=>handleCategoria('aventura')} >Aventura</Categoria>
                <Categoria onClick={()=>handleCategoria('pueblosMagicos')} >Pueblos Magicos</Categoria>
            </CategoriasContainer>
        </>
    );
}

const CategoriasContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export default Categorias;