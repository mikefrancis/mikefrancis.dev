import { Component } from 'react';
import React from 'react';

class Ticker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            height: 80,
            top: 0,
            current: 0,
            items: ['software developer', 'UI designer'],
            delay: 2500,
        };
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.current === this.state.items.length - 1) {
                return this.setState({
                    current: 0,
                    top: 0,
                });
            }

            this.setState(prevState => ({
                top: prevState.top - prevState.height,
                current: prevState.current + 1,
            }));
        }, this.state.delay);
    }

    render() {
        const sliderStyle = {
            transform: `translateY(${this.state.top}px)`,
            transition: 'transform ease-out 400ms',
        };

        return (
            <div className="relative overflow-hidden" style={ { height: this.state.height + 'px' } }>
                <div className="absolute" style={ sliderStyle }>
                    { this.state.items.map((item, i) => (
                        <span key={ i } className="block text-blue">{ item }</span>
                    )) }
                </div>
            </div>
        );
    }

}

export default Ticker;
