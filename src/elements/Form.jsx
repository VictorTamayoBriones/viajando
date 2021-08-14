import styled from 'styled-components';
import theme from '../theme';
import Button from '../elements/Button';

const Form = styled.form`
    width: 80%;
    margin: auto;
    background: ${theme.grisOscuro};
    padding: 8px;
    border-radius: 8px;
    box-shadow: 0px 5px 20px ${theme.sombra};
    ${Button}{
        margin: 12px 0px 0px 0px;
        border-radius: 5px;
    }
    @media (max-width: 700px){
        width: 100%;
    }
`;

const DualContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 700px){
        flex-direction: column;
        gap: 12px;
    }
`;

const SectionA = styled.div`
    width: 45%;
    @media (max-width: 700px){
        width: 100%;
    }
`;

const SectionB = styled.div`
    width: 45%;
    @media (max-width: 700px){
        width: 100%;
    }
`;

const BtnOption = styled.button`
    width: 32%;
    background: ${theme.naranja};
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 8px 0px;
    &:hover{
        background: ${theme.verde};
        cursor: pointer;
    }
`;

const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export {Form, DualContainer, SectionA, SectionB, BtnOption, BtnContainer};