import styled from "styled-components";
import { primaryBlue } from "../../constants/colors";

export const Button = styled.button`
  border: 1px solid #ddd;
  background: ${primaryBlue};
  color: white;
  padding: 1em;
`;

export const ButtonSecondary = styled(Button)`
  background: white;
  color: ${primaryBlue};
  border: 1px solid ${primaryBlue};
  transition: all 0.2s linear;

  &:disabled {
    background: #f8f8f8;
    color: #ccc;
    border: 1px solid #ccc;
  }
`;

export const TextButton = styled.span`
  color: ${primaryBlue};
  cursor: pointer;
  font-size: small;
`;
