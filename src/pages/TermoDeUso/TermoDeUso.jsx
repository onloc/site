import BlackHeader from "../../components/BlackHeader";
import Footer from "../../components/Footer";
import HeaderBanner from "../../components/HeaderBanner";

import bgImage from "../../assets/retangle-banner.png";

import { Content, Title, MainTitle, Text } from "./styles";

export function TermoDeUso() {
  return (
    <>
      <BlackHeader />
      <HeaderBanner text="Termo de Uso" backgroundImage={bgImage} />

      <Content>
        <MainTitle>TERMO DE USO</MainTitle>

        <Text>
          <strong>ON.LOC LOCAÇÃO DE COMPUTADORES LTDA</strong>
        </Text>
        <Text>Última atualização: 11/03/2026</Text>

        <Text>
          O presente Termo de Uso estabelece as condições para utilização dos
          serviços e eventual acesso aos sistemas ou plataformas da On.loc
          Locação de Computadores Ltda, doravante denominada “On.loc”.
          <br />
          Ao contratar serviços, utilizar equipamentos fornecidos pela empresa
          ou acessar seus canais digitais, o usuário declara que leu,
          compreendeu e concorda com as condições estabelecidas neste Termo.
        </Text>

        <section>
          <Title>1. OBJETO</Title>
          <Text>
            Este Termo regula as condições de utilização dos serviços prestados
            pela On.loc, especialmente locação de computadores e equipamentos de
            informática; instalação de equipamentos; manutenção técnica;
            substituição de equipamentos; suporte técnico e retirada de
            equipamentos ao término da locação.
            <br />
            As condições específicas da contratação constarão em contrato de
            locação próprio, sendo este Termo complementar às regras de uso dos
            serviços e equipamentos.
          </Text>
        </section>

        <section>
          <Title>2. ACEITAÇÃO DOS TERMOS</Title>
          <Text>
            Ao contratar ou utilizar os serviços da On.loc, o usuário declara
            que possui capacidade legal para contratar; utilizará os serviços e
            equipamentos de forma lícita; respeitará as condições estabelecidas
            neste Termo e na Política de Privacidade da empresa.
            <br />
            Caso o usuário não concorde com qualquer condição aqui prevista, não
            deverá utilizar os serviços.
          </Text>
        </section>

        <section>
          <Title>3. UTILIZAÇÃO DOS EQUIPAMENTOS LOCADOS</Title>
          <Text>
            Os equipamentos fornecidos pela On.loc deverão ser utilizados
            exclusivamente para fins lícitos e de acordo com a legislação
            vigente.
            <br />
            É vedado ao usuário utilizar os equipamentos para atividades
            ilegais; realizar alterações técnicas ou físicas sem autorização da
            empresa; permitir a utilização dos equipamentos por terceiros de
            forma irregular; instalar programas ou aplicações que comprometam a
            segurança ou funcionamento do equipamento.
            <br />O cliente compromete-se a zelar pela conservação e uso
            adequado dos equipamentos locados.
          </Text>
        </section>

        <section>
          <Title>4. UTILIZAÇÃO DE SOFTWARE E LICENCIAMENTO</Title>
          <Text>
            O cliente é integralmente responsável pela instalação, utilização e
            regularidade das licenças de softwares instalados nos equipamentos
            locados, salvo quando o software for previamente fornecido pela
            On.loc como parte do serviço contratado.
            <br />
            É vedado ao cliente instalar softwares sem a devida licença;
            utilizar versões piratas ou não autorizadas de programas; utilizar
            softwares em desacordo com os termos de licenciamento do fabricante.
            <br />
            A On.loc não se responsabiliza por eventuais infrações relacionadas
            à propriedade intelectual ou licenciamento de software, sendo tais
            responsabilidades exclusivas do cliente. <br /> Caso seja constatada
            a utilização de softwares ilegais nos equipamentos locados, a On.loc
            poderá notificar o cliente para regularização imediata; suspender o
            suporte técnico relacionado ao software irregular; adotar as medidas
            contratuais e legais cabíveis.
          </Text>
        </section>

        <section>
          <Title>5. RESPONSABILIDADE PELO CONTEÚDO ARMAZENADO</Title>
          <Text>
            Todo conteúdo armazenado nos equipamentos locados é de
            responsabilidade exclusiva do cliente, incluindo, mas não se
            limitando a documentos; bancos de dados; imagens; vídeos; softwares;
            informações confidenciais ou pessoais.
            <br />
            O cliente declara que não utilizará os equipamentos para
            armazenamento ou divulgação de conteúdo que viole a legislação
            vigente; infrinja direitos de terceiros; contenha material ilícito
            ou fraudulento; viole direitos autorais ou de propriedade
            intelectual.
            <br />
            Compete ao cliente realizar backup periódico de seus dados; garantir
            a segurança das informações armazenadas nos dispositivos; remover
            dados confidenciais antes da devolução dos equipamentos.
            <br />
            A On.loc não se responsabiliza pela perda de dados decorrente de
            falhas de hardware e de software; procedimentos técnicos necessários
            para manutenção dos equipamentos, salvo nos casos em que for
            comprovada culpa direta da empresa.
            <br />
            A On.loc não realiza monitoramento do conteúdo armazenado nos
            equipamentos locados e não poderá ser responsabilizada por
            informações inseridas ou mantidas pelo cliente.
            <br />
            Caso a empresa receba ordem judicial ou determinação de autoridade
            competente, poderá colaborar com as autoridades fornecendo as
            informações necessárias, nos limites da legislação aplicável. <br />
          </Text>
        </section>

        <section>
          <Title>6. SUPORTE TÉCNICO E ACESSO AOS EQUIPAMENTOS</Title>
          <Text>
            Durante a execução dos serviços de instalação, manutenção,
            substituição, suporte técnico e retirada de equipamentos poderá
            ocorrer acesso eventual a dados armazenados nos equipamentos do
            cliente.
            <br />
            Nessas situações, a On.loc compromete-se a limitar o acesso às
            informações apenas quando estritamente necessário para execução do
            serviço; não copiar, utilizar ou divulgar dados para finalidades
            diversas da prestação do serviço contratado; restringir o acesso
            apenas a profissionais autorizados; adotar medidas de segurança para
            evitar acessos indevidos.
          </Text>
        </section>

        <section>
          <Title>7. DEVOLUÇÃO DOS EQUIPAMENTOS</Title>
          <Text>
            Quando os equipamentos retornarem à posse da On.loc, poderão ser
            realizados procedimentos técnicos de formatação de dispositivos;
            limpeza de dados e reinstalação de sistemas operacionais. Essas
            medidas têm como finalidade garantir que dados eventualmente
            remanescentes não possam ser acessados por terceiros.
          </Text>
        </section>

        <section>
          <Title>8. PROTEÇÃO DE DADOS PESSOAIS</Title>
          <Text>
            A On.loc realiza o tratamento de dados pessoais em conformidade com
            a Lei nº 13.709/2018 – Lei Geral de Proteção de Dados (LGPD). <br />
            Os dados pessoais poderão ser coletados e tratados para finalidades
            como celebração e execução de contratos; prestação de serviços de
            locação de equipamentos; suporte técnico e manutenção; emissão de
            notas fiscais; cumprimento de obrigações legais e regulatórias;
            gestão administrativa da empresa; comunicação com clientes e
            parceiros.
            <br />
            Informações detalhadas sobre o tratamento de dados encontram-se na
            Política de Privacidade da empresa.
          </Text>
        </section>

        <section>
          <Title>9. COMPARTILHAMENTO DE DADOS</Title>
          <Text>
            Os dados pessoais poderão ser compartilhados quando necessário com
            fornecedores de tecnologia; prestadores de serviço; contadores e
            assessores; instituições financeiras e autoridades públicas, quando
            exigido por lei. <br />
            Todo compartilhamento será realizado em conformidade com a
            legislação e mediante adoção de medidas adequadas de segurança.
          </Text>
        </section>

        <section>
          <Title>10. SEGURANÇA DA INFORMAÇÃO</Title>
          <Text>
            A On.loc adota medidas técnicas e administrativas para proteger os
            dados pessoais contra acesso não autorizado; vazamentos; perda de
            dados; alteração indevida; destruição acidental ou ilícita.
            <br />
            Entre as medidas adotadas estão controle de acesso a sistemas;
            restrição de acesso a dados sensíveis; uso de ferramentas de
            segurança da informação e treinamento de colaboradores.
          </Text>
        </section>

        <section>
          <Title>11. DIREITOS DOS TITULARES DE DADOS</Title>
          <Text>
            Nos termos da LGPD, os titulares de dados pessoais possuem direito
            de solicitar confirmação da existência de tratamento de dados;
            acesso aos dados pessoais; correção de dados incompletos ou
            desatualizados; anonimização ou eliminação de dados desnecessários;
            portabilidade de dados; revogação de consentimento, quando
            aplicável.
          </Text>
        </section>

        <section>
          <Title>12. CONTATO</Title>
          <Text>
            Solicitações relacionadas a dados pessoais ou dúvidas sobre este
            Termo podem ser encaminhadas para o canal de contato da empresa
            e-mail: xxxxxxx
          </Text>
        </section>

        <section>
          <Title>13. ATUALIZAÇÕES DESTE TERMO</Title>
          <Text>
            Este Termo de Uso poderá ser atualizado a qualquer momento para
            refletir alterações na legislação; mudanças nos serviços prestados
            visando a melhorias nos processos internos da empresa. <br />A
            versão atualizada será disponibilizada pelos canais oficiais da
            On.loc.
          </Text>
        </section>
      </Content>

      <Footer />
    </>
  );
}
