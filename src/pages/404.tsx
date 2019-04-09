import * as React from "react";
import styled from "styled-components";

import StyledContainer from "./../components/styled/Container";
import StyledHero from "./../components/styled/Hero";
import SEO from "../components/SEO";
import Layout from "../components/layouts/Default";

const Index = () => (
  <>
    <SEO />
    <Layout>
      <StyledHero>
        <StyledContainer>
          <h1>Page not found</h1>
          <p>Well, this is embarrassing. Not sure how this has happened.</p>
        </StyledContainer>
      </StyledHero>
    </Layout>
  </>
);

export default Index;
