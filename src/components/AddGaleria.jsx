import React, {useContext} from 'react'
import {Form, BtnContainer} from '../elements/Form';
import TitleSection from '../elements/titleSection';
import File from '../elements/File';
import ProgressBar from '../elements/progressBar';
import { ContextFile } from '../Context/fileContext';
import useAddGaleria from '../hooks/useAddGaleria';

const AddGaleria = () => {

    const {file, setFile, ready, setReady}=useContext(ContextFile);

    return (  
        <Form>
            <TitleSection>Agregar a la galeria</TitleSection>
            <br />
            <BtnContainer>
                <File/>
            </BtnContainer><br />
            { file && <ProgressBar file={file} setFile={setFile} ready={ready} setReady={setReady} action={useAddGaleria} />}
        </Form>
    );
}
 
export default AddGaleria;