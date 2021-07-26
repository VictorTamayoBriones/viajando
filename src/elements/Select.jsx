import React, {useContext} from 'react';
import {ContextCategoria} from '../Context/categoriaContext';
import styled from 'styled-components';
import theme from '../theme';

const Select = () => {
    const {selectedCategoria}=useContext(ContextCategoria);

    const handleChange =(e)=>{
        selectedCategoria(e.target.value);
    }

    return (
        <SelectList onChange={handleChange}>
            <option value={null}>Categoria</option>
            <option value="ciudad" >Ciudad</option>
            <option value="playa" >Playa</option>
            <option value="aventura" >Aventura</option>
            <option value="pueblosMagicos" >Pueblos Magicos</option>
        </SelectList>
    );
}

const SelectList = styled.select`
    width: 32%;
    background: ${theme.naranja};
    color: #fff;
    border: solid 1px transparent;
    border-radius: 8px;
    padding: 8px 0px;
    &:hover{
        background: ${theme.verde};
        cursor: pointer;
    }
    &:focus{
        background:${theme.grisOscuro};
        border: solid 1px ${theme.naranja};
    }
`;

export default Select;