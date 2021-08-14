import styled from 'styled-components';

const CardImage = styled.div`
    max-width: 100%;
    min-width: 300px;
    max-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 12px;
    .image{
        width: 100%;
        max-height: 200px;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
    .info{
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        position: absolute;
        width: 30%;
        border-radius: 12px;
        padding: 12px;
        text-align: center;
        font-size: 20px;
    }

    @media (max-width: 500px){
        .info{
            width: 70%;
        }
    }
`;

export default CardImage;