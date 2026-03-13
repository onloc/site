import { Text } from "./styles";

const Typography = ({
  children,
  colorText = "#000",
  variant = "sans-serif",
  fontWeight = "400",
  fontSize = "auto",
  fontStyle = "regular",
  style = {},
}) => {
  return (
    <Text
      $colorText={colorText}
      $variant={variant}
      $fontWeight={fontWeight}
      $fontSize={fontSize}
      $fontStyle={fontStyle}
      style={{ ...style }}
    >
      {children}
    </Text>
  );
};

export default Typography;
