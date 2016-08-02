import React, { PropTypes, Component } from 'react'
import Circle from './Circle'

export default class Squares extends Component {
  render() {
      const squares = this.props.squares;
      return <div className="squares">{squares.map(::this.renderSquare)}</div>;
  }

  renderSquare(square) {
      return (
          <div className="square" key={`square${square.id}`} onClick={this.showCircle.bind(this, square)}>
              <Circle opacity={square.opacity}/>
          </div>
      );
  }
  
  showCircle(square){
    let self = this;
    self.props.changeOpacity(square.id, 1);
    let timerId = setInterval(function() {
      self.props.changeOpacity(square.id, square.opacity - 0.25);
    }, 3000);

    setTimeout(function() {
      clearInterval(timerId);
    }, 12000);
  }
}

Squares.propTypes = {
  squares: PropTypes.array.isRequired,
  changeOpacity: PropTypes.func.isRequired
}
