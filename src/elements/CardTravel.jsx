import styled from 'styled-components';
import theme from '../theme';

const CardTravel = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    overflow: hidden;
    position: relative;
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
    @media (max-width: 900px){
        flex-direction:column ;
    }
`;

const ImageContainer = styled.div`
    width: 500px;
    height: 300px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 4px 0px 12px ${theme.sombra};
    img{
        width: 100%;
        height: 100%;
        transform: translateY(-20px);
        position: relative;
        z-index: 1;
        object-fit: cover;
    }
    @media (max-width: 900px){
        width: 100%;
        height: 100%;
        height: max-content;
    }
`;

const ImageTitle = styled.div`
    width: 100%;
    height: 20px;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    color: ${theme.naranja};
    position: relative;
    z-index: 2;
    transform: translateY(120px);
    h2{
        margin: 8px 0px;
    }
    @media (max-width: 600px){
        transform: translateY(100px);
        font-size: 20px;
        height: 25px;
    }
`;

const Details = styled.div`
    width: 500px;
    padding: 0px 0px 0px 50px;
    h2{
        color: ${theme.crema};
    }
    p{
        margin-top: 20px;
        color: ${theme.blanco};
        letter-spacing: 1.3px;
        line-height: 22px;
    }
    @media (max-width: 900px){
        width: 100%;
        padding: 20px 0px 0px 0px;
    }
`;


export {CardTravel, ImageContainer, ImageTitle, Details};