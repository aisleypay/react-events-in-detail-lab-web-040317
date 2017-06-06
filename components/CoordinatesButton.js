import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super();

    this.Click = this.Click.bind(this);
    // this.state = {
    //   onReceiveCoordinates: props.onReceiveCoordinates
    // }

  }

  Click(e) {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }

  render() {
    return (
      <div>
      <button onClick={this.Click}>button</button>
      </div>
    )
  }
}
