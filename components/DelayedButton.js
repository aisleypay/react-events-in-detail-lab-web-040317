import React from 'react';

export default class DelayedButton extends React.Component {
  constructor() {
    super();

    this.Click = this.Click.bind(this);
  }

  Click(e) {
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.Click}>Delayed</button>
    )
  }
}
