import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Squares from '../components/Squares'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    const { squares } = this.props
    const { changeOpacity } = this.props.pageActions;
    return <Squares squares={squares} changeOpacity={changeOpacity} />
  }
}

function mapStateToProps(state) {
  return {
    squares: state.squares
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
