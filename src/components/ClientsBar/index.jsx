import { Container, Logo, Logos, MainLogo, Title, Wrap } from "./styles";

import logoBranca from "../../assets/logo-branca.png";

function ClientsBar() {
    return(
        <>
            <Wrap>
                <Container>
                    <Title>Há 10 anos, <b>impulsionando a produtividade</b> de grandes empresas.</Title>
                    <Logos>
                        <Logo  src={logoBranca} alt="Logo da Empresa" />
                        <MainLogo src={logoBranca} alt="Logo da Empresa" />
                        <Logo src={logoBranca} alt="Logo da Empresa" />
                        <Logo src={logoBranca} alt="Logo da Empresa" />
                    </Logos>
                </Container>
            </Wrap>
        </>
    )
};

export default ClientsBar;