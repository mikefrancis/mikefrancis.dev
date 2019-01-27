import * as React from "react";
import styled from "./../theme";
import Modal from "./Modal";
import StyledContainer from "./styled/Container";
import StyledFlatList from "./styled/FlatList";
import StyledLink from "./styled/Link";
import Switch from "./Switch";

const ModalStyledLink = styled(StyledLink)`
  color: ${(props) => props.theme.colour};
`;

const AboutModalButton: React.FC = () => (
  <ModalStyledLink>About</ModalStyledLink>
);

const AboutModalContent: React.FC = () => (
  <>
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
  </>
);

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.backgroundColour};
  color: ${(props) => props.theme.colour};
  padding-top: 2rem;
  transition: all 300ms;

  .container {
    display: flex;
  }

  .logo {
    flex: 1;
    position: relative;

    .bar:after {
      background-color: ${(props) => props.theme.colour};
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

interface IHeaderProps {
  changeTheme: () => void;
  themeName: string;
  siteTitle: string;
}

const Header: React.FC<IHeaderProps> = (props) => (
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
        <li>
          <Switch
            isChecked={props.themeName === "dark"}
            onChange={props.changeTheme}
          />
        </li>
      </StyledFlatList>
    </StyledContainer>
  </StyledHeader>
);

export default Header;
