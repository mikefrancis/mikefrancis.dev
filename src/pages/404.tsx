import * as React from "react";

import StyledContainer from "./../components/styled/Container";
import Hero from "./../components/styled/Hero";
import Button from "../components/styled/Button";
import SEO from "../components/SEO";
import Layout from "../components/layouts/Default";

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
