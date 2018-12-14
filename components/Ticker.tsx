import * as React from "react";
import styled from "styled-components";

const StyledTicker = styled.div`
  position: relative;
  overflow: hidden;

  .inner {
    position: absolute;
    width: 100%;
  }

  .item {
    color: ${props => props.theme.blue};
    display: block;
  }
`;

interface TickerProps {
  easing: string;
  items: React.ReactNode[];
  delay: number;
  speed: number;
}

interface TicketState {
  current: number;
  height: number;
  top: number;
  total: number;
}

class Ticker extends React.Component<TickerProps, TicketState> {
  private itemRefs: any[];

  constructor(props: TickerProps) {
    super(props);

    this.itemRefs = [];
    props.items.map(() => this.itemRefs.push(React.createRef()));

    this.state = {
      current: 0,
      height: 0,
      top: 0,
      total: props.items.length
    };
  }

  componentDidMount(): void {
    const { delay, items } = this.props;

    const height = this.itemRefs[0].current.clientHeight;

    this.setState({
      height
    });

    setInterval(() => {
      const { current } = this.state;

      if (current === items.length - 1) {
        this.setState({
          current: 0,
          top: 0
        });
        return;
      }

      this.setState(prevState => ({
        top: prevState.top - prevState.height,
        current: prevState.current + 1
      }));
    }, delay);
  }

  render(): React.ReactNode {
    const { height, top } = this.state;

    const { easing, items, speed } = this.props;

    const sliderStyle = {
      transform: `translateY(${top}px)`,
      transition: `transform ${easing} ${speed}ms`
    };

    return (
      <StyledTicker style={{ height: height + "px" }}>
        <div className="inner" style={sliderStyle}>
          {items.map((item, i) => (
            <span ref={this.itemRefs[i]} key={i} className="item">
              {item}
            </span>
          ))}
        </div>
      </StyledTicker>
    );
  }
}

export default Ticker;
