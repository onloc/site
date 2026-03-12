import { Container, Cube, CubeContent, CubeImage, Text } from "./styles";

import desktops from "../../assets/Gallery/desktops.png";
import monitors from "../../assets/Gallery/screens.png";
import notebooks from "../../assets/Gallery/notebooks.png";
import servers from "../../assets/Gallery/servers.png";

import desk from "../../assets/mock-produto.png";

function EquipamentsGallery() {
  return (
    <>
      <Container>
        <Cube $backgroundImage={desktops}>
          <CubeContent>
            <Text>Desktops</Text>
            <CubeImage src={desk} alt="Desk" />
          </CubeContent>
        </Cube>
        <Cube $backgroundImage={monitors}>
          <CubeContent>
            <Text>Monitores</Text>
            <CubeImage src={desk} alt="Desk" />
          </CubeContent>
        </Cube>
        <Cube $backgroundImage={notebooks}>
          <CubeContent>
            <Text>Notebooks</Text>
            <CubeImage src={desk} alt="Desk" />
          </CubeContent>
        </Cube>
        <Cube $backgroundImage={servers}>
          <CubeContent>
            <Text>Servidores</Text>
            <CubeImage src={desk} alt="Desk" />
          </CubeContent>
        </Cube>
      </Container>
    </>
  );
}
export default EquipamentsGallery;
