import { Formik, Field, Form, ErrorMessage } from "formik";
import React, { useRef } from "react";
import * as Yup from "yup";
import styled from "styled-components";

const ContactForm = () => {
  const formRef = useRef(null) as any;

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    // Lógica para lidar com o envio do formulário
    // Implemente a lógica necessária para enviar os dados para o FormSubmit.co
    if (formRef.current) {
      formRef.current.action =
        "https://formsubmit.co/nunesesbaltar.luan02@gmail.com";
      formRef.current.setAttribute("method", "POST");
      formRef.current.submit();
    }

    setSubmitting(false);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("O nome é obrigatório"),
    email: Yup.string()
      .email("E-mail inválido")
      .required("O e-mail é obrigatório"),
    subject: Yup.string().required("O assunto é obrigatório"),
    message: Yup.string().required("A mensagem é obrigatória"),
  });

  return (
    <Container>
      <h2 className="title">Entre em contato comigo</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <Form ref={formRef} className="formContainer">
          <div className="flex flex-row nameAndEmailContainer">
            <div className="inputContainer flex flex-col nameAndEmailInputs">
              <label htmlFor="name">Nome:</label>
              <Field type="text" id="name" name="name" className="inputHalf" />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>
            <div className="inputContainer flex flex-col nameAndEmailInputs">
              <label htmlFor="email">E-mail:</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="inputHalf"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
          </div>
          <div className="inputContainer flex flex-col">
            <label htmlFor="subject">Assunto:</label>
            <Field type="text" id="subject" name="subject" />
            <ErrorMessage
              name="subject"
              component="div"
              className="error-message"
            />
          </div>

          <div className="inputContainer flex flex-col">
            <label htmlFor="message">Mensagem:</label>
            <Field
              as="textarea"
              id="message"
              name="message"
              className="textArea"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="error-message"
            />
          </div>

          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 2rem 2rem;
  border-radius: 50px;

  .title {
    text-align: left;
    text-shadow: 2px 2px 2px #000;
    font-weight: bold;
    color: #007bff;
    margin-top: 1.5rem;
  }

  .error-message {
    color: red;
    font-size: 14px;
  }

  .formContainer {
    display: flex;
    flex-wrap: wrap;
    min-width: 100%;
    max-width: 100%;
  }

  .nameAndEmailContainer {
    width: 100%;
    justify-content: space-between;
    max-width: 100%;
  }

  label {
    text-align: left;
    color: #000;
  }

  .nameAndEmailInputs {
    width: 45%;
  }

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #000;
    background-color: #007bff;
    border-radius: 8px;
    margin-bottom: 8px;
    color: #000;
  }

  .textArea {
    width: 100%;
  }

  button {
    background-color: #007bff;
    color: #000;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
    color: #fff;
    font-weight: bold;
    font-size: 1.3rem;
    border-radius: 8px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    .title {
      font-size: 2rem;
    }

    .formContainer {
      width: 100%;
    }
  }
`;

export default ContactForm;
