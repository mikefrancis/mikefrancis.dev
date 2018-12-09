import React, { Fragment } from "react";
import styled from "styled-components";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Ticker from "./../components/Ticker";
import StyledContainer from "./../components/styled/Container";

const StyledMain = styled.main`
  background-color: white;
  padding: 4rem 0;

  article {
    background-color: ${props => props.theme.blue};
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
      font-family: ${props => props.theme.fontFamilyAlternate};
      font-size: 1.25rem;
      margin: 0 0 2rem;
    }
  }
`;

const StyledHero = styled.section`
  text-align: center;

  @media (min-width: ${props => props.theme.width.sm}px) {
    padding: 4rem 0;
    text-align: left;
  }

  .inner {
    max-width: 60rem;
  }

  h1 {
    font-size: 2rem;
    margin: 0 0 4rem;

    @media (min-width: ${props => props.theme.width.sm}px) {
      font-size: 4rem;
    }
  }

  p {
    font-family: ${props => props.theme.fontFamilyAlternate};
    font-size: 1.5rem;
  }
`;

const App = () => {
  const siteTitle = "Mike Francis";

  return (
    <Fragment>
      <Header siteTitle={siteTitle} />

      <StyledMain>
        <StyledHero className="py-16">
          <StyledContainer>
            <div className="inner">
              <h1 className="relative font-bold text-6xl leading-tight mb-16">
                Just your friendly neighbourhood{" "}
                <Ticker
                  easing="ease-out"
                  delay={2000}
                  speed={400}
                  items={["software developer", "UI designer", "ops tinkerer"]}
                />
              </h1>

              <p className="font-serif leading-normal text-2xl">
                Currently based in London, UK.
              </p>
            </div>
          </StyledContainer>
        </StyledHero>

        <StyledContainer>
          <article className="bg-blue hover:bg-blue-dark text-white container mx-auto p-8 md:p-16 text-center rounded">
            <h2 className="text-3xl mb-8">I Am The Seed Tree</h2>
            <p className="font-serif text-xl mb-8 leading-normal">
              Marketing website built for the amazing people at Nosy Crow.
            </p>
            <p className="mb-8">
              <img
                src="https://placehold.it/800x300"
                alt="I Am The Seed Tree"
              />
            </p>
          </article>
        </StyledContainer>
      </StyledMain>

      <Footer siteTitle={siteTitle} />
    </Fragment>
  );
};

export default App;
