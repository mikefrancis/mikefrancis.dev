import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import styled, { ThemeContext } from "./../theme";
import Modal from "./Modal";
import Container from "./styled/Container";
import KeyboardShortcut from "./KeyboardShortcut";
import StyledFlatList from "./styled/FlatList";
import StyledLink from "./styled/Link";
import Switch from "./Switch";

const KEY_CODE_T = 84;

const ModalStyledLink = styled(StyledLink)`
  color: ${props => props.theme.colours.text};
`;

const AboutModalButton: React.FC = () => (
  <ModalStyledLink>About</ModalStyledLink>
);

const AboutModalContent: React.FC = () => (
  <>
    <h2 className="mb-8">Hello!</h2>
    <p className="mb-4 leading-normal">
      I'm a designer/full-stack developer currently working at{" "}
      <a href="https://www.bulb.co.uk">Bulb</a>, an 100% renewable energy
      provider based in London. We ship APIs and Microservices written using
      TypeScript, GraphQL and Node, as well as cross-platform apps and UIs
      written using React, React Native and Gatsby.
    </p>
    <p className="mb-4 leading-normal">
      I'm also the co-founder/CTO of FortSort, a property search management tool
      which aims to make house-hunting a little easier.
    </p>
    <p className="mb-4 leading-normal">
      Put simply, I{" "}
      <span role="img" aria-label="love">
        ❤️
      </span>{" "}
      designing and building products. If you've got an idea you'd like to
      discuss, please get in touch.
    </p>
  </>
);

const StyledHeader = styled.header`
  background-color: ${props => props.theme.colours.background};
  color: ${props => props.theme.colours.text};
  padding-top: 1.5rem;
  transition: all 300ms;

  .container {
    @media (min-width: ${props => props.theme.width.sm}px) {
      display: flex;
    }
  }

  .logo {
    flex: 1;
    position: relative;
    margin-bottom: 1rem;
    text-align: center;

    @media (min-width: ${props => props.theme.width.sm}px) {
      text-align: initial;
    }

    .bar:after {
      background-color: ${props => props.theme.colours.text};
      content: "";
      left: 0;
      position: absolute;
      height: 2px;
      margin-top: 0.25rem;
      top: 100%;
      width: 45px;
    }
  }

  ul {
    text-align: center;
  }
`;

export const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const Header = () => {
  const { site } = useStaticQuery(query);

  return (
    <ThemeContext.Consumer>
      {({ themeName, toggleTheme }) => (
        <StyledHeader>
          <Container className="container">
            <div className="logo">
              <StyledLink className="bar">
                <Link to="/">{site.siteMetadata.title}</Link>
              </StyledLink>
            </div>

            <StyledFlatList>
              <li>
                <Modal
                  button={<AboutModalButton />}
                  content={<AboutModalContent />}
                />
              </li>
              <li>
                <StyledLink>
                  <Link to="/blog">Blog</Link>
                </StyledLink>
              </li>
              <li>
                <Switch
                  isChecked={themeName === "dark"}
                  onChange={toggleTheme}
                />
                <KeyboardShortcut
                  keyCode={KEY_CODE_T}
                  onKeyDown={toggleTheme}
                />
              </li>
            </StyledFlatList>
          </Container>
        </StyledHeader>
      )}
    </ThemeContext.Consumer>
  );
};

export default Header;
