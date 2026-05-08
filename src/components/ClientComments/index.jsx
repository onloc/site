import {
  Comment,
  CommentAuthor,
  CommentAuthorInfoIcon,
  CommentAuthorRole,
  CommentContainer,
  CommentFooterContainer,
  Image,
  Subtitle,
  Text,
  Title,
  AuthorDetails,
  NameWrapper,
  NavButtons,
  SectionContainer,
  ContentWrapper,
  Stars,
} from "./styles";

import Banner from "../../assets/client-comments.png";
import Star from "../../assets/5-star.png";
import Chevron from "../../assets/chevron.png";
import ChevronDisabled from "../../assets/chevron-disabled.png";

function ClientComments() {
  return (
    <SectionContainer>
      <Image src={Banner} alt="client comments" />
      <ContentWrapper>
        <Title>Quem usa, recomenda</Title>

        <Text>
          Veja como a ON.LOC está transformando a experiência de locação para
          quem aluga e para quem oferece.
        </Text>

        <Subtitle>O que dizem por aqui</Subtitle>

        <CommentContainer>
          <Stars src={Star} alt="stars" />
          <Comment>
            "Encontrei tudo o que precisava em poucos cliques. A plataforma é
            prática, segura e o atendimento foi impecável."
          </Comment>
          <br />
        </CommentContainer>

        <CommentFooterContainer>
          <AuthorDetails>
            <NameWrapper>
              <CommentAuthor>Carlos Henrique</CommentAuthor>
              <CommentAuthorRole>Gerente de TI</CommentAuthorRole>
            </NameWrapper>
          </AuthorDetails>

          <NavButtons>
            <img src={ChevronDisabled} alt="Anterior" />
            <img src={Chevron} alt="Próximo" />
          </NavButtons>
        </CommentFooterContainer>
      </ContentWrapper>
    </SectionContainer>
  );
}

export default ClientComments;
