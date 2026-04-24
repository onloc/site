import Typography from "../Typography";
import { Box, Container, TimeLineBox, TimelineItem, Title } from "./styles";

const TimeLine = () => {
  return (
    <Container>
      <Box>
        <Title>Conheça a história da empresa</Title>
        <Typography variant="Montserrat" fontSize="16px" fontWeight="400">
          A ideia de fundar uma empresa de locação de computadores, surgiu a
          partir do momento em que o mercado apresentou uma necessidade de
          redução de custos nas empresas, sem que isso afetasse a produtividade.
        </Typography>
        <Typography variant="Montserrat" fontSize="16px" fontWeight="400">
          Foi então que os fundadores da ON.LOC se atentaram à possibilidade de
          manter os negócios estáveis no país, mantendo a qualidade e ofertando
          custos mais baixos.
        </Typography>
        <Typography variant="Montserrat" fontSize="16px" fontWeight="400">
          Nesse sentido e com a crescente rejeição de compras de novos
          equipamentos de TI nas empresas, as oportunidades de desenvolvimento e
          expansão da ON.LOC aumentaram.
        </Typography>
        <Typography variant="Montserrat" fontSize="16px" fontWeight="400">
          Hoje, nosso maior compromisso é apresentar as nossas soluções com
          transparência e ética, em especial, no que diz respeito ao
          funcionamento dos nossos equipamentos, serviços e a garantia estendida
          que o cliente tem com o atendimento da ON.LOC.
        </Typography>
      </Box>
      <TimeLineBox>
        <TimelineItem>
          <Typography
            colorText="#014C80"
            variant="Quicksand"
            fontSize="18px"
            fontWeight="500"
            style={{ marginBottom: "16px" }}
          >
            2006 - Início no mercado de TI
          </Typography>
          <Typography
            variant="Montserrat"
            fontSize="16px"
            fontWeight="400"
            style={{ marginBottom: "24px" }}
            colorText="#0E1017"
          >
            Nossa equipe carrega 10 anos de experiência no mercado de tecnologia
            da informação. No início o foco da empresa era na atuação de compra
            e venda de equipamentos corporativos.
          </Typography>
        </TimelineItem>
        <TimelineItem>
          <Typography
            colorText="#014C80"
            variant="Quicksand"
            fontSize="18px"
            fontWeight="500"
            style={{ marginBottom: "16px" }}
          >
            2011 - Fundação da empresa ON.LOC
          </Typography>
          <Typography
            variant="Montserrat"
            fontSize="16px"
            fontWeight="400"
            style={{ marginBottom: "24px" }}
            colorText="#0E1017"
          >
            Com o crescimento do digital, a empresa precisou se adaptar ao novo
            cenário do mercado. Nesse contexto, criamos a empresa ON.LOC com a
            finalidade de trabalhar com locação de computadores. Assim, as
            empresas tiveram a possibilidade de garantir o melhor da tecnologia,
            porém com menores custos.
          </Typography>
        </TimelineItem>
        <TimelineItem>
          <Typography
            colorText="#014C80"
            variant="Quicksand"
            fontSize="18px"
            fontWeight="500"
            style={{ marginBottom: "16px" }}
          >
            2012 - Nasceu oficialmente a ONLOC.
          </Typography>
        </TimelineItem>
        <TimelineItem>
          <Typography
            colorText="#014C80"
            variant="Quicksand"
            fontSize="18px"
            fontWeight="500"
            style={{ marginBottom: "16px" }}
          >
            2014 - Lançamento dos serviços de locação ON.LOC
          </Typography>
          <Typography
            variant="Montserrat"
            fontSize="16px"
            fontWeight="400"
            style={{ marginBottom: "24px" }}
            colorText="#0E1017"
          >
            Após pesquisas realizadas no setor, a ON.LOC colocou em prática o
            projeto criado de locação online de equipamento de TI. Desde então,
            a ON.LOC conquista cada vez mais clientes de Rio Claro/SP e região.
          </Typography>
        </TimelineItem>
        <TimelineItem>
          <Typography
            colorText="#014C80"
            variant="Quicksand"
            fontSize="18px"
            fontWeight="500"
            style={{ marginBottom: "16px" }}
          >
            2017 - Já celebrávamos nosso contrato nº100.
          </Typography>
        </TimelineItem>
        <TimelineItem>
          <Typography
            colorText="#014C80"
            variant="Quicksand"
            fontSize="18px"
            fontWeight="500"
            style={{ marginBottom: "16px" }}
          >
            2018 - Chegamos a 100 clientes ativos.
          </Typography>
        </TimelineItem>
        <TimelineItem>
          <Typography
            colorText="#014C80"
            variant="Quicksand"
            fontSize="18px"
            fontWeight="500"
            style={{ marginBottom: "16px" }}
          >
            2019 - Atualizamos nossos contratos para a LGPD e expandimos para
            Campinas.
          </Typography>
        </TimelineItem>
        <TimelineItem>
          <Typography
            colorText="#014C80"
            variant="Quicksand"
            fontSize="18px"
            fontWeight="500"
            style={{ marginBottom: "16px" }}
          >
            2020 - Lançamos o ERP On.Loc 1.0, e em 2021 batemos recorde de
            vendas.
          </Typography>
        </TimelineItem>
        <TimelineItem>
          <Typography
            colorText="#014C80"
            variant="Quicksand"
            fontSize="18px"
            fontWeight="500"
            style={{ marginBottom: "16px" }}
          >
            2024 - Um marco: novo escritório em Piracicaba, certificação ISO 9001 e nosso cliente nº1000.
          </Typography>
        </TimelineItem>
        <TimelineItem>
          <Typography
            colorText="#014C80"
            variant="Quicksand"
            fontSize="18px"
            fontWeight="500"
            style={{ marginBottom: "16px" }}
          >
            Atualmente - Uma Empresa atenta aos seus clientes
          </Typography>
          <Typography
            variant="Montserrat"
            fontSize="16px"
            fontWeight="400"
            style={{ marginBottom: "24px" }}
            colorText="#0E1017"
          >
            O relacionamento duradouro com nossos clientes acontece porque
            fornecemos ideias inovadoras que possibilitam o alcance de
            resultados positivos. Somos comprometidos com a experiência de cada
            um, e por isso nos tornamos parceiros confiáveis.
          </Typography>
        </TimelineItem>
      </TimeLineBox>
    </Container>
  );
};

export default TimeLine;
