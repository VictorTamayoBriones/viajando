import React from 'react';
import styled from 'styled-components';
import ctz from '../assets/images/ctz-2.jpeg';
import tj from '../assets/images/tj-2.jpeg';
import tpz from '../assets/images/tpz-2.jpeg';
import Button from '../elements/Button';
import TitleSection from '../elements/titleSection';
import OfertaCard from '../elements/OfertaCard';

const OfertasSection = ({title}) => {
    return (
        <Ofertas>
            {title ? 
                <TitleSection>Ofertas</TitleSection>
                :
                ''
            }
            <div className="data">
                <OfertaCard>
                    <div className="image">
                        <img src={ctz} alt=""/>
                    </div>
                    <div className="info">    
                        <p className="place">Cuetzalan.</p>
                        <p>Descuento del 20% pagando antes del 4 de junio.</p>
                    </div>
                    <Button to="/">Ver mas</Button>
                </OfertaCard>

                <OfertaCard>
                    <div className="image">
                        <img src={tj} alt=""/>
                    </div>
                    <div className="info">    
                        <p className="place">Tajin.</p>
                        <p>Descuento del 20% pagando antes del 4 de junio.</p>
                    </div>
                    <Button to="/">Ver mas</Button>
                </OfertaCard>

                <OfertaCard>
                    <div className="image">
                        <img src={tpz} alt=""/>
                    </div>
                    <div className="info">    
                        <p className="place">Tepoztlan.</p>
                        <p>Descuento del 20% pagando antes del 4 de junio.</p>
                    </div>
                    <Button to="/">Ver mas</Button>
                </OfertaCard>
            </div>
        </Ofertas>
    );
}


const Ofertas = styled.div`
    width: 100%;
    margin: 20px 0px;
    .data{
        display: flex;
        overflow: hidden;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

export default OfertasSection;