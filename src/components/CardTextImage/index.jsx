import Typography from "../Typography";
import { Container } from "./styles";

const CardTextImage = ({ image, backgroundColor, text, tinyText, variant = "title" }) => {
  const containerStyle =
    variant === "other" ? { padding: "68px 32px" } : { padding: "150px 32px" };

  return (
    <Container $bgImage={image} $bgColor={backgroundColor} style={containerStyle}>
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
      {tinyText && (
        <Typography
          variant="Qubic Grid; Sans-serif"
          fontSize="18px"
          fontWeight="400"
          colorText="#FFF"
          style={{ marginTop: "16px", alignSelf: "flex-end" }}
        >
          {tinyText}
        </Typography>
      )}
    </Container>
  );
};

export default CardTextImage;
