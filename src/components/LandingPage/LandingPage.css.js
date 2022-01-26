import styled from "styled-components";
import background from "../../assets/img/background.png";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(160, 114, 190, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: url(${background});
  background-size: cover;
`;
