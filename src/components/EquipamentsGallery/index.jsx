import { Container, Cube, CubeContent, CubeImage, Text } from "./styles";

import desktops from "../../assets/Gallery/desktops.png";
import monitors from "../../assets/Gallery/screens.png";
import notebooks from "../../assets/Gallery/notebooks.png";
import servers from "../../assets/Gallery/servers.png";

import work from "../../assets/Equipamentos-Site-2026/Workdesk/Sem-Título-1_0006_imgi_60_71awmxgow0L._AC_SL1413_.png";
import screen from "../../assets/Equipamentos-Site-2026/Monitor/imgi_67_Monitor-Hp-Series-5-Pro-24-Fhd-Usb-c-Com-Webcam-Pop-up-5mp-udio-Com-Ia-100w-Power-Delivery-E-Design-Sustent-vel_1776256732.png";
import note from "../../assets/Equipamentos-Site-2026/Note/imgi_7_Notebook-Hp-Elitebook-640-G11-Pot-ncia-Ia-Seguran-a-Corporativa-E-Mobilidade-Profissional-Tela-14-16-10-Desempenho-Intel-Para-Trabalho-H-brido_1776256735.png";
import server from "../../assets/Equipamentos-Site-2026/Servidores/imgi_3_server-poweredge-t560-silver-gallery-5.png";

function EquipamentsGallery() {
  return (
    <>
      <Container>
        <Cube $backgroundImage={desktops}>
          <CubeContent>
            <Text>Workstations</Text>
            <CubeImage style={{width: "90px", height: "auto", marginLeft: "8px"}} src={work} alt="Workstation" />
          </CubeContent>
        </Cube>
        <Cube $backgroundImage={monitors}>
          <CubeContent>
            <Text>Monitores</Text>
            <CubeImage style={{width: "160px", height: "auto", marginLeft: "8px"}} src={screen} alt="Screen" />
          </CubeContent>
        </Cube>
        <Cube $backgroundImage={notebooks}>
          <CubeContent>
            <Text>Notebooks</Text>
            <CubeImage style={{width: "155px", height: "auto", marginLeft: "8px"}} src={note} alt="Notebook" />
          </CubeContent>
        </Cube>
        <Cube $backgroundImage={servers}>
          <CubeContent>
            <Text>Servidores</Text>
            <CubeImage style={{width: "120px", height: "auto", marginLeft: "8px"}} src={server} alt="Server" />
          </CubeContent>
        </Cube>
      </Container>
    </>
  );
}
export default EquipamentsGallery;
