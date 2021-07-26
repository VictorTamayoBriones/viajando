import styled from 'styled-components';
import theme from '../theme';

const CardTravel = styled.div`
    width: 1000px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
`;

const ImageContainer = styled.div`
    width: 500px;
    height: 300px;
    overflow: hidden;
    border-radius: 8px;
    img{
        width: 100%;
    }
`;

const ImageTitle = styled.div`
    width: 500px;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    color: ${theme.naranja};
    position: absolute;
    transform: translateY(350%);
    h2{
        margin: 8px 0px;
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
`;


export {CardTravel, ImageContainer, ImageTitle, Details};