import styled from 'styled-components';
import theme from '../theme';

const TitleSection = styled.h3`
    max-height: 100px;
    text-align: ${(props) => {
        if(props.center === 'center'){
            return 'center';
        } else {
            return 'left';
        }
    }};
    margin-top: 20px;
    letter-spacing: ${(props)=>{
        if(props.center === 'center'){
            return '10px';
        }else{
            return '2px';
        }
    }};
    font-size: ${(props)=>{
        if(props.center === 'center'){
            return '30px';
        }else{
            return '20px';
        }
    }};
    color: ${theme.naranja};

    @media (max-width: 550px){
        text-align: center;
    }

`;

export default TitleSection;