import * as React from "react";

import StyledContainer from "./../components/styled/Container";
import Hero from "./../components/styled/Hero";
import SEO from "../components/SEO";
import Layout from "../components/layouts/Default";
import styled from "../theme";

const Button = styled.a`
  background-color: ${props => props.theme.colours.primary};
  border-radius: 0.25rem;
  color: white;
  display: inline-block;
  padding: 0.5rem 1rem;
`;

const Index = () => (
  <>
    <SEO />
    <Layout>
      <Hero>
        <StyledContainer>
          <h1>Page not found</h1>
          <p>Well, this is embarrassing.</p>
          <p>
            <Button href="/">← Back to home</Button>
          </p>
        </StyledContainer>
      </Hero>
    </Layout>
  </>
);

export default Index;
