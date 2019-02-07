import * as React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StyledContainer from "./components/styled/Container";
import Ticker from "./components/Ticker";
import styled, { GlobalStyle } from "./theme";

const StyledMain = styled.main`
  background-color: ${props => props.theme.backgroundColour};
  color: ${props => props.theme.colour};
  padding: 4rem 0;
  transition: all 300ms;

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

const App: React.FC = props => {
  const siteTitle = "Mike Francis";

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={siteTitle} />

      <StyledMain>
        <StyledHero>
          <StyledContainer>
            <div className="inner">
              <h1>
                Just your friendly neighborhood{" "}
                <Ticker
                  easing="ease-out"
                  delay={2000}
                  speed={400}
                  items={["software developer", "UI designer", "ops tinkerer"]}
                />
              </h1>

              <p>Currently based in London, UK.</p>
            </div>
          </StyledContainer>
        </StyledHero>

        <StyledContainer>
          <article>
            <h2>I Am The Seed Tree</h2>
            <p>Marketing website built for the amazing people at Nosy Crow.</p>
            <p>
              <img
                src="https://placehold.it/800x300"
                alt="I Am The Seed Tree"
              />
            </p>
          </article>
        </StyledContainer>
      </StyledMain>

      <Footer siteTitle={siteTitle} />
    </>
  );
};

export default App;
