import React from 'react'
import {Form, BtnContainer} from '../elements/Form';
import TitleSection from '../elements/titleSection';
import File from '../elements/File';

const AddGaleria = () => {
    return (  
        <Form>
            <TitleSection>Agregar a la galeria</TitleSection>
            <br />
            <BtnContainer>
                <File/>
            </BtnContainer>
        </Form>
    );
}
 
export default AddGaleria;