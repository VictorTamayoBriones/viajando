import styled from 'styled-components';
import theme from '../theme';

const Ofertacard = styled.div`
    width: 300px;
    height: max-content;
    margin: 12px 0px;
    border-radius: 12px;
    background: #353535;
    overflow: hidden;
    .image{
        width: 100%;
        height: 200px;
        overflow: hidden;
        img{
        width: 100%;
        }
    }
    .info{
        height: 120px;
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