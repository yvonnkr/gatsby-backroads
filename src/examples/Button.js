import styled from "styled-components";

const primColor = "blue";

const Button = styled.button`
  color: black;
  /* background: ${primColor}; */
  background: ${props => props.color};
  font-size: 2rem;
  padding: 1rem;
`;

export default Button;
