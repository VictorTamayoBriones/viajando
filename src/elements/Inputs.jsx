import styled from 'styled-components';
import theme from '../theme';

const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const Input = styled.input`
    padding: 8px;
    border: none;
    border-bottom: solid 1px ${theme.naranja};
    font-size: 18px;
    background: transparent;
    color: ${theme.blanco};
    &:focus{
        outline: none;
        border-bottom: solid 1px ${theme.verde};
    }
`;

const Message = styled.textarea`
    max-width: 100%;
    min-width: 100%;
    max-height: 300px;
    min-height: 165px;
    margin: auto;
    background: ${theme.grisClaro};
    border: none;
    border-radius: 8px;
    padding: 8px;
    letter-spacing: 1.3px;
    &:focus{
        outline: none;
        border: solid 1px ${theme.naranja};
    }
`;

export {InputsContainer, Input, Message};