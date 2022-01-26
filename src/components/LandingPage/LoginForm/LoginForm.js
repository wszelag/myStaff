import React from "react";
import { useForm } from "react-hook-form";
import {
  StyledForm,
  StyledH1,
  StyledH2,
  StyledH4,
  StyledInput,
  StyledSubmitInput,
  Link
} from "./LoginForm.css";

export const LoginForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledH1>myStaff</StyledH1>
      <StyledH2>Stay in touch.</StyledH2>
      <StyledH4>Email:</StyledH4>
      <StyledInput defaultValue="" {...register("email")} />
      <StyledH4>Password:</StyledH4>
      <StyledInput type="password" defaultValue="" {...register("password")} />
      <StyledSubmitInput type="submit" value="Login" />
      <Link>
        Don't have an account? <a href="">Register</a>.
      </Link>
    </StyledForm>
  );
};
