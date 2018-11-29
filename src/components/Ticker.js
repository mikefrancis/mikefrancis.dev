import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class Ticker extends Component {

    constructor(props) {
        super(props);

        this.itemRefs = [];
        props.items.map(() => this.itemRefs.push(createRef()));

        this.state = {
            current: 0,
            height: 0,
            top: 0,
            total: props.items.length,
        };
    }

    componentDidMount() {
        const {
            delay,
            items,
        } = this.props;

        const height = this.itemRefs[0].current.clientHeight;

        this.setState({
            height,
        });

        setInterval(() => {
            const { current } = this.state;

            if (current === items.length - 1) {
                return this.setState({
                    current: 0,
                    top: 0,
                });
            }

            this.setState(prevState => ({
                top: prevState.top - prevState.height,
                current: prevState.current + 1,
            }));
        }, delay);
    }

    render() {
        const {
            height,
            top,
        } = this.state;

        const {
            easing,
            items,
            speed,
        } = this.props;

        const sliderStyle = {
            transform: `translateY(${top}px)`,
            transition: `transform ${easing} ${speed}ms`,
        };

        return (
            <div className="relative overflow-hidden" style={ { height: height + 'px' } }>
                <div className="absolute" style={ sliderStyle }>
                    { items.map((item, i) => (
                        <span ref={ this.itemRefs[i] } key={ i } className="ticker-item block text-blue">{ item }</span>
                    )) }
                </div>
            </div>
        );
    }

}

Ticker.propTypes = {
    easing: PropTypes.string,
    items: PropTypes.array.isRequired,
    delay: PropTypes.number,
    speed: PropTypes.number,
};

Ticker.defaultProps = {
    easing: 'ease-out',
    delay: 2500,
    items: [],
    speed: 400,
};

export default Ticker;
