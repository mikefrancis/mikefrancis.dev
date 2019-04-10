import styled, { css } from "../../theme";

interface Props {
  disabled?: boolean;
}

const Button = styled.span<Props>`
  background-color: ${props => props.theme.colours.primary};
  border-radius: 0.25rem;
  color: white;
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0.25rem 1rem;

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.75;
    `}
`;

export default Button;
