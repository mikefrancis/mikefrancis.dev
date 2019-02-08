import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "./../theme";
import KeyboardShortcut from "./KeyboardShortcut";

const KEY_CODE_ESCAPE = 27;

const StyledModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity ease-out 400ms;
`;

const StyledModal = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 4rem 2rem;

  @media (min-width: ${props => props.theme.width.sm}px) {
    padding: 4rem;
  }
`;

const StyledModalClose = styled.button`
  background-color: transparent;
  border: 0;
  color: ${props => props.theme.grey};
  display: flex;
  padding: 1.5rem;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    color: white;
  }

  .hidden {
    display: none;
  }
`;

const StyledModalOpen = styled.button`
  background-color: transparent;
  border: 0;
  font: inherit;
`;

const StyledModalWindow = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  flex: 1;
  padding: 2rem;
  margin: auto;
  max-width: 50rem;
  text-align: center;

  @media (min-width: ${props => props.theme.width.sm}px) {
    padding: 4rem;
  }
`;

interface IModalProps {
  button: React.ReactNode;
  content: React.ReactNode;
}

interface IModalState {
  isOpen: boolean;
}

class Modal extends React.Component<IModalProps, IModalState> {
  private overlayRef: React.RefObject<HTMLDivElement>;
  private modalRef: React.RefObject<HTMLDivElement>;

  constructor(props: IModalProps) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.overlayRef = React.createRef();
    this.modalRef = React.createRef();

    this.toggleModalVisibility = this.toggleModalVisibility.bind(this);
  }

  public componentDidMount() {
    if (this.state.isOpen) {
      this.toggleFixed();
    }

    this.toggleModalVisibility();
  }

  public handleOpen = () => {
    this.setState({ isOpen: true }, () => {
      this.toggleFixed();
      this.toggleModalVisibility();
    });
  };

  public handleClose = () => {
    this.setState({ isOpen: false }, () => {
      this.toggleFixed();
    });
  };

  public toggleModalVisibility = () => {
    if (!this.overlayRef.current || !this.modalRef.current) {
      return;
    }

    if (this.state.isOpen) {
      this.overlayRef.current.style.visibility = "visible";
      this.modalRef.current.style.visibility = "visible";
    } else {
      this.overlayRef.current.style.visibility = "hidden";
      this.modalRef.current.style.visibility = "hidden";
    }
  };

  public toggleFixed() {
    document.body.style.overflow = this.state.isOpen ? "hidden" : "auto";
  }

  public render() {
    const { isOpen } = this.state;

    /* tslint:disable:max-line-length */
    const modalContent = ReactDOM.createPortal(
      <>
        <StyledModalOverlay
          ref={this.overlayRef}
          style={{ opacity: isOpen ? 100 : 0 }}
          onTransitionEnd={this.toggleModalVisibility}
        />

        <StyledModal
          ref={this.modalRef}
          style={{ opacity: isOpen ? 100 : 0 }}
          onTransitionEnd={this.toggleModalVisibility}
        >
          <StyledModalClose onClick={this.handleClose}>
            <span className="hidden">Close modal</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
                fill="currentcolor"
              />
            </svg>
          </StyledModalClose>

          <StyledModalWindow onTransitionEnd={this.toggleModalVisibility}>
            {this.props.content}
          </StyledModalWindow>
        </StyledModal>
      </>,
      document.body
    );
    /* tslint:enable:max-line-length */

    return (
      <>
        <KeyboardShortcut
          keyCode={KEY_CODE_ESCAPE}
          onKeyDown={this.handleClose}
        />
        <StyledModalOpen onClick={this.handleOpen}>
          {this.props.button}
        </StyledModalOpen>

        {modalContent}
      </>
    );
  }
}

export default Modal;
