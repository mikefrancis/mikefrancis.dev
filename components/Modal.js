import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const KEY_CODE_ESCAPE = 27;

class Modal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            // isOpen: true,
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        if (this.state.isOpen) {
            this.toggleFixed();
        }

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

    toggleFixed() {
        document.body.classList.toggle('overflow-hidden');
    }

    render() {
        if (!process.browser) {
            return null
        }

        const modalContent = createPortal(
            <Fragment>
                <div className={ `z-20 bg-black-translucent fixed pin fade-in-out ${this.state.isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}` } />

                <div className={ `absolute pin overflow-x-hidden overflow-y-auto z-30 px-8 p-16 ${this.state.isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}` }>
                    <button className="flex text-grey hover:text-white absolute pin-r pin-t text-6xl leading-none p-6" onClick={ this.handleClose }>
                        <span className="hidden">Close modal</span>
                        <svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" fill="currentcolor"/></svg>
                    </button>

                    <div className={ `bg-white m-auto p-8 md:p-16 pb-4 md:pb-8 rounded max-w-lg flex-1 text-center ${this.state.isOpen ? 'on-screen visible' : 'off-screen-bottom invisible'}` }>
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
