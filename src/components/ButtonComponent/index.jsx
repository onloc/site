import { Button } from "./styles";

const ButtonComponent = ({ text, func = () => {} }) => {
  return <Button onClick={func}>{text}</Button>;
};

export default ButtonComponent;
