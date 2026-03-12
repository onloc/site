import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import BlackHeader from "../components/BlackHeader";
import EquipamentoViewer from "../components/EquipamentoViewer";
import EquipamentoDetalhesInfo from "../components/EquipamentoDetalhesInfo";
import FAQ from "../components/FAQ";
import RecomendItems from "../components/RecomendItems";
import ClientComments from "../components/ClientComments";

export function EquipamentoDetalhes() {
  const location = useLocation();
  const { item } = location.state || {};

  const faqData = [
    {
      id: "01",
      title: "Como funciona?",
      content: `Para contratar as soluções personalizadas ON.LOC, basta ter em mente a quantidade e a configuração desejada, ou simplesmente nos informar a funcionalidade esperada com a máquina.

Com essas informações, indicaremos a melhor configuração, levando em conta a disponibilidade do estoque da ONLOC.

Os desktops e notebooks que fornecemos já vão com o sistema operacional original da Microsoft instalado, o Windows licenciado.

A equipe de TI da sua preferência poderá instalar ou formatar a máquina com os softwares necessários, incluindo o pacote Office. Com isso, você estará à vontade para gerenciar seus sistemas usuais.`,
    },
    {
      id: "02",
      title: "E os aparelhos que não tem mais atualização de software?",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
    {
      id: "03",
      title: "Como é o processo de análise?",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
    {
      id: "04",
      title: "Quais formas de pagamento?",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
    {
      id: "05",
      title: "O que acontece com o final da minha assinatura?",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
  ];

  if (!item) {
    return (
      <>
        <BlackHeader />
        <div style={{ padding: "100px", textAlign: "center" }}>
          <h1>Produto não encontrado</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <BlackHeader />
      <div style={{ background: "#EFF2F3" }}>
        <EquipamentoViewer item={item} />
      </div>
      <div style={{ background: "#fff", padding: "100px 200px " }}>
        <EquipamentoDetalhesInfo />
        <h1
          style={{
            fontFamily: "Quicksand",
            fontWeight: "500",
            fontSize: "24px",
            lineHeight: "125%",
            color: "#1e1e20",
          }}
        >
          Perguntas Frequentes:
        </h1>
        <FAQ data={faqData} />
      </div>
      <div style={{ background: "#EFF2F3", padding: "100px 100px " }}>
        <RecomendItems />
        <hr
          style={{ margin: "50px", marginTop: "175px", marginBottom: "120px" }}
        />
        <ClientComments />
      </div>
      <Footer />
    </>
  );
}
