import * as React from "react";

import styled from "../../theme";

const StyledHero = styled.section`
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
    margin: 0 0 4rem;

    @media (min-width: ${props => props.theme.width.sm}px) {
      font-size: 4rem;
      line-height: 5rem;
    }
  }

  p {
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 1.5rem;
  }
`;

export default StyledHero;
