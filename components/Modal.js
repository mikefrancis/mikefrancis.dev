import React, { Component, Fragment, createRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const KEY_CODE_ESCAPE = 27;

const StyledModalOvelay = styled.div`
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

class Modal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.overlayRef = createRef();
        this.modalRef = createRef();

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.toggleModalVisibility = this.toggleModalVisibility.bind(this);
    }

    componentDidMount() {
        if (this.state.isOpen) {
            this.toggleFixed();
        }

        this.toggleModalVisibility();

        window.addEventListener('keyup', event => {
            if (event.keyCode === KEY_CODE_ESCAPE && this.state.isOpen) {
                this.handleClose();
            }
        });
    }

    handleOpen() {
        this.setState({ isOpen: true }, () => {
            this.toggleFixed();
            this.toggleModalVisibility();
        });
    }

    handleClose() {
        this.setState({ isOpen: false }, () => {
            this.toggleFixed();
        });
    }

    toggleModalVisibility () {
        if (this.state.isOpen) {
            this.overlayRef.current.style.visibility = 'visible';
            this.modalRef.current.style.visibility = 'visible';
        } else {
            this.overlayRef.current.style.visibility = 'hidden';
            this.modalRef.current.style.visibility = 'hidden';
        }
    }

    toggleFixed() {
        document.body.style.overflow = this.state.isOpen ? 'hidden' : 'auto';
    }

    render() {
        const {
            isOpen,
        } = this.state;

        if (!process.browser) {
            return null;
        }

        const modalContent = createPortal(
            <Fragment>
                <StyledModalOvelay ref={ this.overlayRef } style={ { opacity : isOpen ? 100 : 0 } } onTransitionEnd={ this.toggleModalVisibility } />

                <StyledModal ref={ this.modalRef } style={ { opacity : isOpen ? 100 : 0 } } onTransitionEnd={ this.toggleModalVisibility }>
                    <StyledModalClose onClick={ this.handleClose }>
                        <span className="hidden">Close modal</span>
                        <svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" fill="currentcolor"/></svg>
                    </StyledModalClose>

                    <StyledModalWindow onTransitionEnd={ this.toggleModalVisibility }>
                        { this.props.content }
                    </StyledModalWindow>
                </StyledModal>
            </Fragment>,
            document.body
        );

        return (
            <Fragment>
                <button onClick={ this.handleOpen }>
                    { this.props.button }
                </button>

                { modalContent }
            </Fragment>
        );
    }

}

Modal.propTypes = {
    button: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
};

Modal.defaultProps = {
    button: null,
    content: null,
};

export default Modal;
