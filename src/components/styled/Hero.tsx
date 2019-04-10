import * as React from "react";

import styled from "../../theme";
import Container from "../styled/Container";

const StyledHero = styled.section`
  overflow: hidden;
  text-align: center;

  @media (min-width: ${props => props.theme.width.sm}px) {
    padding: 4rem 0;
    text-align: left;
  }

  .inner {
    max-width: 40rem;
  }

  h1 {
    font-size: 2rem;
    margin: 0 0 2rem;

    @media (min-width: ${props => props.theme.width.sm}px) {
      font-size: 4rem;
      line-height: 5rem;
    }
  }

  p {
    margin: 0 0 2rem;

    &:first-of-type {
      font-family: ${props => props.theme.fonts.secondary};
      font-size: 1.5rem;
    }
  }
`;

const Hero: React.FC = ({ children }) => (
  <StyledHero>
    <Container>
      <div className="inner">{children}</div>
    </Container>
  </StyledHero>
);

export default Hero;
