import styled from 'styled-components';
import {Link} from 'react-router-dom';
import theme from '../theme';

const Button = styled(Link)`       
    width: ${(props) => props.large ? '100%' : 'auto'};
    background: ${theme.naranja};
    color: #fff;
    border: none;
    padding: 5px 0px;
    border-radius: ${(props)=>props.radius ? '5px' : 'none'};
    letter-spacing: 1.3px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    &:hover{
        background: ${theme.verde};
        cursor: pointer;
    }
`;

export default Button;