import styled from 'styled-components';
import theme from '../theme';

const ListContainer = styled.div`
    width: 90%;
    margin: auto;
    transform: translateY(10px);
    margin-bottom: 12px;
`;

const TitleList = styled.h3`
    color: ${theme.naranja};
    display: flex;
    &:hover{
        cursor: pointer;
        color: ${theme.crema};
    }
    svg{
        align-self: center;
        margin-left: 5px;
    }

`;

const List = styled.ul`
    width: 100%;
    padding: 8px;
`;

const ListElement = styled.li`
    color: ${theme.crema};
    list-style: none;
    margin-bottom: 8px;
    padding-bottom: 4px;
    border-bottom: solid 1px ${theme.grisOscuro};
    display: ${(props)=>{
        if(props.visible === true){
            return 'block';
        }else if(props.visible === false){
            return 'none';
        }
    }};
    &:hover{
        color: ${theme.verde};
        cursor: pointer;
    }
`;

export {ListContainer, TitleList, List, ListElement};