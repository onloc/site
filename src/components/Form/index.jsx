import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Turnstile } from "@marsidev/react-turnstile";
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
  const [captchaToken, setCaptchaToken] = useState(null);
  const [showCaptcha, setShowCaptcha] = useState(false); // Controla a exibição do widget
  const turnstileRef = useRef();
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

  const sendEmail = (token) => {
    setLoading(true);

    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      telefone: formData.telefone,
      message: formData.mensagem,
      subject_title: `Formulário Site ${formData.nome}`,
      to_email: "contato@onloc.com.br",
      "cf-turnstile-response": token,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
          setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
          setCaptchaToken(null);
        },
        (err) => {
          console.error("Erro ao enviar:", err);
          alert("Falha ao enviar e-mail. Tente novamente.");
        },
      )
      .finally(() => {
        setLoading(false);
        setCaptchaToken(null);
      });
  };

  // Efeito que dispara o envio automático assim que o captcha é resolvido
  useEffect(() => {
    if (captchaToken && showCaptcha) {
      // Pequeno delay para o usuário ver que o captcha deu "check" antes de sumir
      const timer = setTimeout(() => {
        setShowCaptcha(false);
        sendEmail(captchaToken);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [captchaToken]);

  const handleInitialClick = (e) => {
    e.preventDefault();

    // Validação de campos obrigatórios antes de mostrar o captcha
    if (!formData.nome || !formData.email || !formData.mensagem) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (Object.values(errors).some((error) => error !== "")) {
      alert("Por favor, corrija os erros no formulário.");
      return;
    }

    setShowCaptcha(true); // Esconde o botão e mostra o captcha
  };

  return (
    <Container as="form" onSubmit={handleInitialClick}>
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

      <div
        style={{ display: "flex", justifyContent: "center", minHeight: "50px" }}
      >
        {showCaptcha ? (
          <Turnstile
            ref={turnstileRef}
            siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
            onSuccess={(token) => setCaptchaToken(token)}
            onExpire={() => {
              setCaptchaToken(null);
              setShowCaptcha(false);
            }}
            onError={() => {
              setCaptchaToken(null);
              setShowCaptcha(false);
              alert("Erro na verificação. Tente clicar em enviar novamente.");
            }}
          />
        ) : (
          <Button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        )}
      </div>
    </Container>
  );
};

export default Form;
