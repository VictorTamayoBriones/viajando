import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import {Link, useHistory} from 'react-router-dom';

const Navbar = (props) => {

    const history = useHistory();

    return (
        <Navigation>
            <h1 onClick={()=>history.push('/')} >Viajando Ando</h1>
            <ul>

                {
                    props.admin ?
                    <>
                        <li><Link to="/" >Ver blog</Link></li>
                        <li><Link to="/" >Cerrar sesion</Link></li>
                    </>
                    :
                    <>
                        <li><Link to="/viajes">Viajes</Link></li>
                        <li><Link to="/ofertas">Ofertas</Link></li>
                        <li><Link to="/galeria">Galeria</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </>
                }
            </ul>
        </Navigation>
    );
}

const Navigation = styled.nav`
    width: 100%;
    background: transparent;
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 2px;
    background: #111111;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3);
    h1{
        color: ${theme.crema};
        transition: .5s ease all;
        text-shadow: 1.5px 1.5px 0px teal;
        font-size: 30px;
        &:hover{
            transition: .5s ease all;
            text-shadow: -1.5px -1.5px 0px teal;
            cursor: pointer;
        }
    }
    ul{
        display: flex;
        justify-content: flex-end;
        list-style: none;
        gap: 50px;
        li{
            a{
                color: ${theme.naranja};
                text-decoration: none;
                font-size: 18px;
                &:hover{
                    color: ${theme.verde};
                    cursor: pointer;
                }
            }
        }
    }
`;

export default Navbar;