import Typography from "../Typography";
import { Container } from "./styles";

const CardTextImage = ({ image, text, variant = "title" }) => {
  const containerStyle =
    variant === "other" ? { padding: "68px 32px" } : { padding: "150px 32px" };

  return (
    <Container $bgImage={image} style={containerStyle}>
      {variant === "title" ? (
        <Typography
          variant="Quicksand"
          fontSize="40px"
          fontWeight="500"
          colorText="#FFF"
        >
          {text}
        </Typography>
      ) : (
        <Typography
          variant="Qubic Grid; Sans-serif"
          fontSize="24px"
          fontWeight="400"
          colorText="#FFF"
        >
          {text}
        </Typography>
      )}
    </Container>
  );
};

export default CardTextImage;
