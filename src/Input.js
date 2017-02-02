import React, { PureComponent, PropTypes } from 'react';

export default class Input extends PureComponent {
  static propTypes = {
    onCreate: PropTypes.func.isRequired
  }

  state = {
    value: ''
  }

  sendUrl = () => {
    this.props.onCreate({
      url: this.state.value
    });

    this.setState({
      value: ''
    })
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleClick = () => {
    this.sendUrl();
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.value}
        />
        <button
          onClick={this.handleClick}
          type="button"
          >
          Send current url
        </button>
      </div>
    );
  }
}
