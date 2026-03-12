import { useState } from "react";
import {
  Container,
  InputGroup,
  Label,
  Input,
  TextArea,
  Row,
  Button,
  CharCount,
  FormTitle,
  ErrorText,
} from "./styles";

const Form = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState({});
  const limit = 100;

  const validate = (name, value) => {
    let error = "";
    if (name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "E-mail inválido";
    }
    if (name === "telefone" && value && !/^\d{10,11}$/.test(value.replace(/\D/g, ""))) {
      error = "Telefone inválido (apenas números)";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mensagem" && value.length > limit) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  return (
    <Container>
      <FormTitle>Preencha o formulário</FormTitle>

      <InputGroup>
        <Label>Seu nome</Label>
        <Input
          name="nome"
          $hasError={!!errors.nome}
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite aqui"
        />
      </InputGroup>

      <Row>
        <InputGroup>
          <Label>E-mail</Label>
          <Input
            name="email"
            $hasError={!!errors.email}
            value={formData.email}
            onChange={handleChange}
            placeholder="exemplo@email.com"
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
        </InputGroup>

        <InputGroup>
          <Label>Telefone</Label>
          <Input
            name="telefone"
            $hasError={!!errors.telefone}
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Apenas números"
          />
          {errors.telefone && <ErrorText>{errors.telefone}</ErrorText>}
        </InputGroup>
      </Row>

      <InputGroup>
        <Label>Mensagem</Label>
        <TextArea
          name="mensagem"
          $hasError={!!errors.mensagem}
          placeholder="Digite aqui"
          rows="6"
          value={formData.mensagem}
          onChange={handleChange}
        />
        <CharCount>
          {formData.mensagem.length}/{limit}
        </CharCount>
      </InputGroup>

      <Button>Enviar</Button>
    </Container>
  );
};

export default Form;