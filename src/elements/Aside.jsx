import styled from 'styled-components';
import theme from '../theme';

const Aside = styled.div`
    width: 20%;
    height: 100vh;
    background: ${theme.negro};
    svg{
        color: ${theme.naranja};
        margin-left: 5px;
    }
`;

export default Aside;