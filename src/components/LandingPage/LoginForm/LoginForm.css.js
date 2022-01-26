import styled from "styled-components";

export const StyledForm = styled.form`
  height: 480px;
  width: 300px;
  user-select: none;
  position: relative;
`;

export const StyledH1 = styled.h1`
  width: 100%;
  height: 100px;
  line-height: 160px;
  text-align: center;
  font-size: 40px;
`;

export const StyledH2 = styled.h2`
  width: 100%;
  height: 60px;
  text-align: center;
  font-size: 30px;
`;

export const StyledH4 = styled.h4`
  width: 100%;
  height: 20px;
  font-size: 20px;
  padding-left: 30px;
  margin-top: 5px;
`;

export const StyledInput = styled.input`
  height: 30px;
  width: 240px;
  margin-left: 30px;
  margin-top: 5px;
  font-size: 20px;
  padding: 6px 0;
  border: none;
  border-bottom: 1px solid black;
  background: inherit;
  outline: none;
  &:focus {
    background: none;
    border-bottom-color: rgb(70, 87, 242);
  }
`;

export const StyledSubmitInput = styled.input`
  width: 80px;
  height: 50px;
  margin-left: 110px;
  margin-top: 10px;
  border-radius
`;

export const Link = styled.p`
  width: 100%;
  margin-top: 5px;
  text-align: center;
`;
