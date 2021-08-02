import React from 'react'
import {CardTravel, ImageContainer, ImageTitle, Details} from '../elements/CardTravel';
import tpz from '../assets/images/tpz-2.jpeg';
import ctz from '../assets/images/ctz-2.jpeg';
import tj from '../assets/images/tj-2.jpeg';

const ViewViajes = () => {
    return (  
        <>
            <CardTravel>
                <ImageTitle><h2>Tepoztlan</h2></ImageTitle>
                <ImageContainer>
                    <img src={tpz} alt=""/>
                </ImageContainer>
                <Details>
                    <h2>Detalles del viaje</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugiat, 
                        ea consequuntur accusantium quia ab optio eveniet doloribus beatae 
                        aperiam perspiciatis provident suscipit asperiores? Porro ab 
                        quibusdam culpa, doloribus nulla totam officia voluptas 
                        inventore ullam molestias odio enim laboriosam commodi 
                        cumque nisi unde deleniti officiis.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Atque sed sit doloremque quae! Cumque quos debitis unde aliquid esse, 
                        voluptatem aliquam ut porro fuga saepe doloremque, magnam voluptate, 
                        consequuntur laudantium.
                    </p>
                </Details>
            </CardTravel>
            <br />
            <CardTravel>
                <ImageTitle><h2>Cuetzalan</h2></ImageTitle>
                <ImageContainer>
                    <img src={ctz} alt=""/>
                </ImageContainer>
                <Details>
                    <h2>Detalles del viaje</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugiat, 
                        ea consequuntur accusantium quia ab optio eveniet doloribus beatae 
                        aperiam perspiciatis provident suscipit asperiores? Porro ab 
                        quibusdam culpa, doloribus nulla totam officia voluptas 
                        inventore ullam molestias odio enim laboriosam commodi 
                        cumque nisi unde deleniti officiis.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Atque sed sit doloremque quae! Cumque quos debitis unde aliquid esse, 
                        voluptatem aliquam ut porro fuga saepe doloremque, magnam voluptate, 
                        consequuntur laudantium.
                    </p>
                </Details>
            </CardTravel>
            <br />
            <CardTravel>
                <ImageTitle><h2>Tajin</h2></ImageTitle>
                <ImageContainer>
                    <img src={tj} alt=""/>
                </ImageContainer>
                <Details>
                    <h2>Detalles del viaje</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugiat, 
                        ea consequuntur accusantium quia ab optio eveniet doloribus beatae 
                        aperiam perspiciatis provident suscipit asperiores? Porro ab 
                        quibusdam culpa, doloribus nulla totam officia voluptas 
                        inventore ullam molestias odio enim laboriosam commodi 
                        cumque nisi unde deleniti officiis.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Atque sed sit doloremque quae! Cumque quos debitis unde aliquid esse, 
                        voluptatem aliquam ut porro fuga saepe doloremque, magnam voluptate, 
                        consequuntur laudantium.
                    </p>
                </Details>
            </CardTravel>

        </>
    );
}
 
export default ViewViajes;