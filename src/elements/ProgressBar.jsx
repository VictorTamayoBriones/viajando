import React, {useContext} from 'react';
import styled from 'styled-components';
import theme from '../theme';
import useStorage from '../hooks/useStorage';
import {ContextFile} from '../Context/fileContext';

const ProgressBar = () => {

    const {file, setFile} = useContext(ContextFile);
    const { url, progress } = useStorage(file);

    return (
        <Bar>Subiendo imagen... {progress}%</Bar>
    );
}

const Bar = styled.div`
    height: 20px;
    background: ${theme.crema};
    color: ${theme.verde};
    border-radius: 8px;
    padding: 0px 2px;
`;

export default ProgressBar;