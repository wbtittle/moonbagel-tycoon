import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { buyMachine, makeVisible } from "../actions"

class Machine extends Component {

	clickMachine( evt ){
		const { store } = this.context;
		store.dispatch(buyMachine( this.props ));
    if (this.props.isReadable) store.dispatch( makeVisible(this.props.makeVisible))
	}
  render(){
    const { store } = this.context
    var bagel = store.getState().bagel
    return (
          <button disabled={bagel.produced<this.props.cost} id={this.props.id} key={this.props.id} onClick={ this.clickMachine.bind(this) } className="machine">
                { this.props.isReadable }
                <img src={this.props.src} alt={this.props.isReadable?this.props.name:"?????????"} />
                <span className="name">{this.props.isReadable?this.props.name:"?????????"}</span>
                <span className="price">{ Math.floor(this.props.cost,2) }</span>
                <span className="produces">{ Math.floor(this.props.generates,2) }</span>
					</button>
    )
  }
}
Machine.contextTypes = {
	store: PropTypes.object
}

export default Machine;
