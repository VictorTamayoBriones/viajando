import React from 'react'
import useObtenerGalery from '../hooks/useObtenerGalery';
import styled from 'styled-components';

const GaleryTemp = () => {

    const [photos]=useObtenerGalery();

    return (  
        <ContainerGalery>
            {
                photos.map((photo)=>{
                    return (
                        <div className="image">
                            <img key={photo.id} src={photo.url} alt="" />
                        </div>
                    )
                })
            }
        </ContainerGalery>
    );
}

const ContainerGalery = styled.div`
    width: 95%;
    margin: auto;
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
            width: 120%;
            opacity: .7;
        }
        &:hover{
            cursor: pointer;
            img{
                opacity: 1;
            }
        }
    }
`;

export default GaleryTemp;