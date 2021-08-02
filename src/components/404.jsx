import React from 'react'
import {ReactComponent as SVG404} from '../assets/images/24.svg';
import styled from 'styled-components';

const Error404 = () => {
    return (  
        <Error/>
    );
}

const Error = styled(SVG404)`
    max-width: 100vw;
    max-height: 100vh;
`;

export default Error404;