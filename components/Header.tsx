import React, { Fragment, ReactNode } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import StyledLink from "./styled/Link";
import StyledContainer from "./styled/Container";
import StyledFlatList from "./styled/FlatList";

const AboutModalButton = (): ReactNode => <StyledLink>About</StyledLink>;

const AboutModalContent = (): ReactNode => (
  <Fragment>
    <h2 className="mb-8">Hello!</h2>
    <p className="mb-4 leading-normal">
      I'm a designer/full-stack developer currently working at Pod Point, an
      electric car charging network based in London. We ship APIs and
      Microservices written in Laravel/Lumen and Node, as well as cross-platform
      apps and UIs written in React and React Native.
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
  </Fragment>
);

const StyledHeader = styled.header`
  background-color: white;
  padding-top: 2rem;

  .container {
    display: flex;
  }

  .logo {
    flex: 1;
    position: relative;

    .bar:after {
      background-color: ${props => props.theme.greyDarker};
      content: "";
      left: 0;
      position: absolute;
      height: 2px;
      margin-top: 0.25rem;
      top: 100%;
      width: 45px;
    }
  }

  button {
    background-color: transparent;
    border: 0;
    font: inherit;
  }
`;

interface HeaderProps {
  siteTitle: string;
}

const Header = (props: HeaderProps): ReactNode => (
  <StyledHeader>
    <StyledContainer className="container">
      <div className="logo">
        <StyledLink className="bar">{props.siteTitle}</StyledLink>
      </div>

      <StyledFlatList>
        <li>
          <Modal
            button={<AboutModalButton />}
            content={<AboutModalContent />}
          />
        </li>
      </StyledFlatList>
    </StyledContainer>
  </StyledHeader>
);

export default Header;
