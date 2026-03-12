import { Button } from "./styles";

const ButtonComponent = ({ text, func = () => {}, variant = "" }) => {
  return (
    <Button onClick={func} variant={variant}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
