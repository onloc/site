import { useState } from "react";
import emailjs from "@emailjs/browser"; // Importação necessária
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
  const [loading, setLoading] = useState(false);
  const limit = 100;

  const validate = (name, value) => {
    let error = "";
    if (
      name === "email" &&
      value &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      error = "E-mail inválido";
    }
    if (
      name === "telefone" &&
      value &&
      !/^\d{10,11}$/.test(value.replace(/\D/g, ""))
    ) {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificação básica se campos estão vazios
    if (!formData.nome || !formData.email || !formData.mensagem) {
      alert("Por favor, preencha os campos obrigatórios.");
      return;
    }

    setLoading(true);

    // Parâmetros que devem bater com as variáveis no template do EmailJS
    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      telefone: formData.telefone,
      message: formData.mensagem,
      subject_title: `Formulário Site ${formData.nome}`,
      to_email: "contato@onloc.com.br",
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (response) => {
          console.log("SUCESSO!", response.status, response.text);
          alert("Sua mensagem foi enviada com sucesso!");
          setFormData({ nome: "", email: "", telefone: "", mensagem: "" }); // Limpa o form
        },
        (err) => {
          console.error("ERRO AO ENVIAR:", err);
          alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
        },
      )
      .finally(() => setLoading(false));
  };

  return (
    <Container as="form" onSubmit={handleSubmit}>
      <FormTitle>Preencha o formulário</FormTitle>

      <InputGroup>
        <Label>Seu nome</Label>
        <Input
          name="nome"
          $hasError={!!errors.nome}
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite aqui"
          required
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
            required
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
          required
        />
        <CharCount>
          {formData.mensagem.length}/{limit}
        </CharCount>
      </InputGroup>

      <Button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </Button>
    </Container>
  );
};

export default Form;
