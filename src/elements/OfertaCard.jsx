import styled from 'styled-components';
import theme from '../theme';

const Ofertacard = styled.div`
    width: 300px;
    height: max-content;
    margin: 12px 0px;
    border-radius: 12px;
    background: #353535;
    overflow: hidden;
    svg{
        position: absolute;
        width: 20px;
        height: 20px;
        z-index: 2;
        color: ${theme.blanco};
        margin: 5px;
        padding: 2px;
        border-radius: 20px;
        background: #000;
        &:hover{
            cursor: pointer;
            background: red;
        }
    }
    .image{
        width: 100%;
        height: 200px;
        overflow: hidden;
        img{
        width: 100%;
        }
    }
    .info{
        padding: 8px;
        color: ${theme.blanco};
        p{
            letter-spacing: 1.3px;
            margin: 8px 0px;
            line-height: 20px;
        }
        .place{
            color: ${theme.verde};
        }
    }
`;

export default Ofertacard;