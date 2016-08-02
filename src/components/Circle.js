import React, { PropTypes, Component } from 'react'

export default class Circle extends Component {
  render() {
      var divStyle = {
          opacity: this.props.opacity
      };
      return (
          <div className="circle" style={divStyle}></div>
      );
  }
}

Circle.propTypes = {
  opacity: PropTypes.number.isRequired
}
