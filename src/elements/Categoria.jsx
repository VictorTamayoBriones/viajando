import styled from 'styled-components';
import theme from '../theme';

const Categoria = styled.div`
    width: 230px;
    min-height: 50px;
    background: ${theme.naranja};
    color: #fff;
    padding: 8px;
    border-radius: 8px;
    font-size: 18px;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background: ${theme.verde};
        cursor: pointer;
    }
`;

export default Categoria;