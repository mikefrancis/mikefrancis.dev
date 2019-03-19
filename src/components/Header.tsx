import * as React from "react";
import { Link, useStaticQuery } from "gatsby";

import styled, { ThemeContext } from "./../theme";
import Modal from "./Modal";
import StyledContainer from "./styled/Container";
import StyledFlatList from "./styled/FlatList";
import StyledLink from "./styled/Link";
import Switch from "./Switch";
import { query } from "./SEO";

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
    display: flex;
  }

  .logo {
    flex: 1;
    position: relative;

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
`;

const Header = () => {
  const { site } = useStaticQuery(query);

  return (
    <ThemeContext.Consumer>
      {({ themeName, toggleTheme }) => (
        <StyledHeader>
          <StyledContainer className="container">
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
                <Switch
                  isChecked={themeName === "dark"}
                  onChange={toggleTheme}
                />
              </li>
            </StyledFlatList>
          </StyledContainer>
        </StyledHeader>
      )}
    </ThemeContext.Consumer>
  );
};

export default Header;
