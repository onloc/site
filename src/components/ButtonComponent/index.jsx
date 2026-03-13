import { Button } from "./styles";

const ButtonComponent = ({ 
  text, 
  func = () => {}, 
  variant = "", 
  minWidth = "239px", 
  flex = false,
}) => {
  return (
    <Button 
      onClick={func} 
      variant={variant} 
      minWidth={minWidth} 
      flex={flex}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;