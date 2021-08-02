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
`;

const DualContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const SectionA = styled.div`
    width: 45%;
`;

const SectionB = styled.div`
    width: 45%;
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