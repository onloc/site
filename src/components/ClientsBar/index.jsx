import { Container, Logo, Logos, MainLogo, Title, Wrap } from "./styles";

import logoBranca from "../../assets/equipamentos-2026/VERSÃO MINIMALISTA - BRANCO.png";
import logoAzul from "../../assets/equipamentos-2026/VERSÃO MINIMALISTA - AZUL.png";

function ClientsBar() {
    return(
        <>
            <Wrap>
                <Container>
                    <Title>Há mais de 13 anos, <b>impulsionando a produtividade</b> de grandes empresas.</Title>
                    <Logos>
                        <Logo  src={logoBranca} alt="Logo da Empresa" />
                        <MainLogo src={logoAzul} alt="Logo da Empresa" />
                        <Logo src={logoBranca} alt="Logo da Empresa" />
                        <Logo src={logoAzul} alt="Logo da Empresa" />
                    </Logos>
                </Container>
            </Wrap>
        </>
    )
};

export default ClientsBar;