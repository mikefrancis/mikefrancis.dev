import * as React from "react";
import styled from "styled-components";

import StyledContainer from "./../components/styled/Container";
import SEO from "../components/SEO";
import Ticker from "../components/Ticker";
import Layout from "../components/layouts/Default";

const StyledHero = styled.section`
  text-align: center;

  @media (min-width: ${props => props.theme.width.sm}px) {
    padding: 4rem 0;
    text-align: left;
  }

  .inner {
    max-width: 70rem;
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

const Project = styled.article`
  background-color: ${props => props.theme.colours.primary};
  border-radius: 0.25rem;
  color: white;
  padding: 2rem;
  text-align: center;

  @media (min-width: ${props => props.theme.width.sm}px) {
    padding: 4rem;
  }

  h2 {
    font-size: 1.875rem;
    margin: 0 0 2rem;
  }

  p {
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 1.25rem;
    margin: 0 0 2rem;
  }
`;

const Index = () => (
  <>
    <SEO />
    <Layout>
      <StyledHero>
        <StyledContainer>
          <div className="inner">
            <h1>
              Just your friendly neighbourhood{" "}
              <Ticker
                easing="ease-out"
                delay={2000}
                speed={400}
                items={["software engineer", "UI designer", "ops tinkerer"]}
              />
            </h1>

            <p>Currently based in London, UK.</p>
          </div>
        </StyledContainer>
      </StyledHero>

      <StyledContainer>
        <Project>
          <h2>I Am The Seed Tree</h2>
          <p>Marketing website built for the amazing people at Nosy Crow.</p>
          <p>
            <img src="https://placehold.it/800x300" alt="I Am The Seed Tree" />
          </p>
        </Project>
      </StyledContainer>
    </Layout>
  </>
);

export default Index;
