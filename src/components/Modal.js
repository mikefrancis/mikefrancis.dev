import React, { Component, Fragment, createRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const KEY_CODE_ESCAPE = 27;

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
        this.setState({
            isOpen: true,
        });

        this.toggleFixed();
    }

    handleClose() {
        this.setState({
            isOpen: false,
        });

        this.toggleFixed();
    }

    toggleModalVisibility () {
        if (this.state.isOpen) {
            this.overlayRef.current.classList.add('visible');
            this.overlayRef.current.classList.remove('invisible');
            this.modalRef.current.classList.add('visible');
            this.modalRef.current.classList.remove('invisible');
        } else {
            this.overlayRef.current.classList.add('invisible');
            this.overlayRef.current.classList.remove('visible');
            this.modalRef.current.classList.add('invisible');
            this.modalRef.current.classList.remove('visible');
        }
    }

    toggleFixed() {
        document.body.classList.toggle('overflow-hidden');
    }

    render() {
        const {
            isOpen,
        } = this.state;

        const modalContent = createPortal(
            <Fragment>
                <div ref={ this.overlayRef } className={ `z-20 bg-black-translucent fixed pin fade-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}` } onTransitionEnd={ this.toggleModalVisibility } />

                <div ref={ this.modalRef } className={ `absolute pin overflow-x-hidden overflow-y-auto z-30 px-8 p-16 ${isOpen ? 'opacity-100' : 'opacity-0'}` } onTransitionEnd={ this.toggleModalVisibility }>
                    <button className="flex text-grey hover:text-white absolute pin-r pin-t text-6xl leading-none p-6" onClick={ this.handleClose }>
                        <span className="hidden">Close modal</span>
                        <svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" fill="currentcolor"/></svg>
                    </button>

                    <div className={ `bg-white m-auto p-8 md:p-16 pb-4 md:pb-8 rounded max-w-lg flex-1 text-center ${isOpen ? 'on-screen' : 'off-screen-bottom'}` } onTransitionEnd={ this.toggleModalVisibility }>
                        { this.props.content }
                    </div>
                </div>
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
