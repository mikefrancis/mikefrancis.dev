import styled from "styled-components";

const Link = styled.span`
  color: ${props => props.theme.black};
  font-weight: bold;
  letter-spacing: 0.05rem;
  position: relative;
  text-transform: uppercase;
`;

export default Link;
