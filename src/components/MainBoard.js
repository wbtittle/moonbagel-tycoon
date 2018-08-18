import React, { Component } from 'react'
import Machines from "./Machines"
import Bagel from "./Bagel"
import PropTypes from "prop-types"
import {updateInterval, resetGame} from '../actions'
class MainBoard extends Component {
  componentDidMount(){
    setInterval(this.getBagels.bind(this),1000 );
  }

  getBagels(){
    const { store } = this.context
    console.log("GETTING BAGELS");
    store.dispatch(updateInterval());
  }

  resetGame(){
    const { store } = this.context
    store.dispatch(resetGame());
  }

  render(){
    return (
      <div className="mainBoard">
        <Bagel />
        <div className="machines">
          <Machines />
        </div>
        <div> <button onClick={this.resetGame.bind(this)}> Reset </button></div>
      </div> );
  }
}
MainBoard.contextTypes = {
	store: PropTypes.object
}
export default MainBoard
