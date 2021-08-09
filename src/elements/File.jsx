import React, {useContext} from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { ContextFile } from '../Context/fileContext';

const File = () => {

    const { handleChange } = useContext(ContextFile);

    return (
        <>
            <Label htmlFor="file" >Sube una foto</Label>
            <FileInput type="file" id="file" onChange={handleChange} />
        </>
    );
}

const FileInput = styled.input`
    position: absolute;
    z-index: -1;
    top: 10px;
    left: 8px;
    font-size: 17px;
    color: #b8b8b8;
`;

const Label = styled.label`
    display: inline-block;
    width: 32%;
    background: ${theme.naranja};
    color: #fff;
    border: solid 1px transparent;
    border-radius: 8px;
    padding: 8px 2px;
    &:hover{
        background: ${theme.verde};
        cursor: pointer;
    }
    &:focus{
        background:${theme.grisOscuro};
        border: solid 1px ${theme.naranja};
    }
`;
export default File;