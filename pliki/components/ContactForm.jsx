import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FormContainer,
  Input,
  TextArea,
  SubmitButton,
  StyledLabel,
  ErrorText,
  PageContainer,
} from "./ContactFormStyles";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Full name must be at least 3 characters")
      .required("Full name is required"),
    subject: yup
      .string()
      .min(3, "Subject must be at least 3 characters")
      .required("Subject is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    body: yup
      .string()
      .min(3, "Body must be at least 3 characters")
      .required("Body is required"),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="fullName">Full name</StyledLabel>
        <Input
          {...register("fullName")}
          placeholder="Your full name"
          id="fullName"
        />
        <ErrorText>{errors.fullName?.message}</ErrorText>

        <StyledLabel htmlFor="subject">Subject</StyledLabel>
        <Input {...register("subject")} placeholder="Subject" id="subject" />
        <ErrorText>{errors.subject?.message}</ErrorText>

        <StyledLabel htmlFor="email">Email</StyledLabel>
        <Input {...register("email")} placeholder="Your email" id="email" />
        <ErrorText>{errors.email?.message}</ErrorText>

        <StyledLabel htmlFor="body">Message</StyledLabel>
        <TextArea {...register("body")} placeholder="Your message" id="body" />
        <ErrorText>{errors.body?.message}</ErrorText>

        <SubmitButton type="submit">Submit</SubmitButton>
      </FormContainer>
    </PageContainer>
  );
}

export default App;
