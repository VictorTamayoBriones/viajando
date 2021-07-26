import React from 'react';
import Navbar from '../elements/Navbar.component';
import ContainerMedium from '../elements/ContainerMedium';
import TitleSection from '../elements/titleSection';
import {Form, DualContainer, SectionA, SectionB} from '../elements/Form';
import {InputsContainer, Input, Message} from '../elements/Inputs';
import Button from '../elements/Button';
import Helmet from 'react-helmet';

const Contacto = () => {

    return (
        <>
            <Helmet>
                <title>Contacto</title>
            </Helmet>
            <Navbar/>
            <ContainerMedium>
                <TitleSection center='center' >Contacto</TitleSection>
                <Form >
                    <DualContainer>
                        <SectionA>
                            <InputsContainer>
                                <Input type="text" placeholder="Nombre"  />
                                <Input type="text" placeholder="Telefono"  />
                                <Input type="email" placeholder="Correo"  />
                            </InputsContainer>
                        </SectionA>
                        <SectionB>
                            <InputsContainer>
                                <Message placeholder="Mensaje..." />
                            </InputsContainer>
                        </SectionB>
                    </DualContainer>
                    <Button as="button" type="submit" large >Enviar</Button>
                </Form>
            </ContainerMedium>
        </>
    );
}

export default Contacto;