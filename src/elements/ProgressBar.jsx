import React, {useEffect} from 'react'
import styled from 'styled-components';
import theme from '../theme';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile, place, categoria, date, description, ready, setReady, action={useStorage} }) => {
    
    const { progress, url } = action(file, place, categoria, date, description, ready, setReady);

    useEffect(()=>{
        if(url){
            setFile(null);
        }
    }, [url, setFile]);

    return (  
        <Bar progress={progress}><p>Creando...</p></Bar>
    );
}

const Bar = styled.div`
    width: ${props => props.progress ? props.progress : '10px'};
    height: 20px;
    background: ${theme.naranja};
    border-radius: 8px;
    overflow: hidden;
    p{
        transform: translateX(50px);
    }
`;

export default ProgressBar;