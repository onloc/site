import { Container, Cube, CubeContent, CubeImage, Text } from "./styles";

import desktops from "../../assets/Gallery/desktops.png";
import monitors from "../../assets/Gallery/screens.png";
import notebooks from "../../assets/Gallery/notebooks.png";
import servers from "../../assets/Gallery/servers.png";

import work from "../../assets/equipamentos-2026/WORKSTATION HP Z2 G4 TOWER XEON E-2144G.webp";
import screen from "../../assets/equipamentos-2026/1200.webp";
import note from "../../assets/equipamentos-2026/NOTEBOOK WORKSTATION HP ZBOOK FURY 15 G7 I7-10850H 1.webp"
import server from "../../assets/equipamentos-2026/SERVIDOR DELL POWEREDGE T440 2X XEON GOLD 6138.png";

function EquipamentsGallery() {
  return (
    <>
      <Container>
        <Cube $backgroundImage={desktops}>
          <CubeContent>
            <Text>Workstations</Text>
            <CubeImage style={{width: "110px", height: "auto", marginLeft: "8px"}} src={work} alt="Workstation" />
          </CubeContent>
        </Cube>
        <Cube $backgroundImage={monitors}>
          <CubeContent>
            <Text>Monitores</Text>
            <CubeImage style={{width: "120px", height: "auto", marginLeft: "8px"}} src={screen} alt="Screen" />
          </CubeContent>
        </Cube>
        <Cube $backgroundImage={notebooks}>
          <CubeContent>
            <Text>Notebooks</Text>
            <CubeImage style={{width: "120px", height: "auto", marginLeft: "8px"}} src={note} alt="Notebook" />
          </CubeContent>
        </Cube>
        <Cube $backgroundImage={servers}>
          <CubeContent>
            <Text>Servidores</Text>
            <CubeImage style={{width: "100px", height: "auto", marginLeft: "8px"}} src={server} alt="Server" />
          </CubeContent>
        </Cube>
      </Container>
    </>
  );
}
export default EquipamentsGallery;
