import React from 'react'
import ctz1 from '../assets/images/ctz-1.jpeg';
import ctz2 from '../assets/images/ctz-2.jpeg';
import ctz3 from '../assets/images/ctz-3.jpeg';
import ctz4 from '../assets/images/ctz-4.jpeg';
import tj1 from '../assets/images/tj-1.jpeg';
import tj2 from '../assets/images/tj-2.jpeg';
import tj3 from '../assets/images/tj-3.jpeg';
import tpz1 from '../assets/images/tpz-1.jpeg';
import tpz2 from '../assets/images/tpz-2.jpeg';
import tpz3 from '../assets/images/tpz-3.jpeg';
import styled from 'styled-components';

const GaleriaElement = () => {
    return (  
        <Container>
            <div className="image">
                <img src={ctz1} alt=""/>
            </div>
            <div className="image">
                <img src={ctz2} alt=""/>
            </div>
            <div className="image">
                <img src={ctz3} alt=""/>
            </div>
            <div className="image">
                <img src={ctz4} alt=""/>
            </div>
            <div className="image">
                <img src={tj1} alt=""/>
            </div>
            <div className="image">
                <img src={tj2} alt=""/>
            </div>
            <div className="image">
                <img src={tj3} alt=""/>
            </div>
            <div className="image">
                <img src={tpz1} alt=""/>
            </div>
            <div className="image">
                <img src={tpz2} alt=""/>
            </div>
            <div className="image">
                <img src={tpz3} alt=""/>
            </div>
            <div className="image">
                <img src={ctz4} alt=""/>
            </div>
            <div className="image">
                <img src={tj2} alt=""/>
            </div>
        </Container>
            
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .image{
        width: 22%;
        height: 120px;
        border-radius: 8px;
        margin-top: 12px;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
`;

export default GaleriaElement;