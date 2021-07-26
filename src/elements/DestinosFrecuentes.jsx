import React from 'react';
import styled from 'styled-components';
import TitleSection from '../elements/titleSection';
import CardImage from '../elements/CardImage';
import ctz from '../assets/images/ctz-1.jpeg';
import tj from '../assets/images/tj-1.jpeg';
import tpz from '../assets/images/tpz-3.jpeg';

const DestinosFrecuentes = () => {
    return (
        <>
            <TitleSection>Destinos Frecuentes</TitleSection>
            <ContainerFrecuentes>
                <CardImage>
                    <div className="image">
                        <img src={ctz} alt=""/>
                    </div>
                    <div className="info">
                        <p>Cuetzalan - Puebla</p>
                    </div>
                </CardImage>

                <CardImage>
                    <div className="image">
                        <img src={tj} alt=""/>
                    </div>
                    <div className="info">
                        <p>Tajin</p>
                    </div>
                </CardImage>

                <CardImage>
                    <div className="image">
                        <img src={tpz} alt=""/>
                    </div>
                    <div className="info">
                        <p>Tepozclan</p>
                    </div>
                </CardImage>

            </ContainerFrecuentes>
        </>
    );
}

const ContainerFrecuentes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export default DestinosFrecuentes;