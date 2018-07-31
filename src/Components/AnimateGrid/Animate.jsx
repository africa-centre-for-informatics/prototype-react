import React from 'react';
import '../../Blade.css';
import MeetingPanel from '../Dashboard/Panels/MeetingPanel';
import { Animated } from "react-animated-css";

class Animate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      showComponent2: false,
      width: '100%'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      showComponent: !prevState.showComponent,
      width: '50%'
    }));
  }
  handleClick2(e) {
    e.preventDefault();
    this.setState(prevState => ({
      showComponent2: !prevState.showComponent2,
    }));
  }

  render() {
    const parentStyle = {
      width: this.state.width
    };
    return (
      <div className="p-5">
        <h4><button onClick={this.handleClick}>Reveal 1</button></h4>
        <h4><button onClick={this.handleClick2}>Reveal 2</button></h4>
        <div className="blades">
          <div className="parent blade" style={parentStyle}><MeetingPanel /></div>
          { this.state.showComponent &&
            <Animated animationIn="slideInRight" animationOut="slideOutRight" className="children blade">
              <MeetingPanel />
            </Animated>
          }
          { this.state.showComponent2 &&
            <Animated animationIn="slideInRight" animationOut="slideOutRight" className="children blade">
              <MeetingPanel />
            </Animated>
          }
        </div>
      </div>
    );
  }
}

export default Animate;
