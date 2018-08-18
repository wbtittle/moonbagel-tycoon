import React, { Component }from 'react'
import PropTypes from 'prop-types'
import { clickBagel } from '../actions'

class Bagel extends Component {

  componentDidMount(){
		const { store } = this.context;
    this.unsubscribe = store.subscribe( () =>this.forceUpdate() );
	}

  handleClick(evt){
    const { store } = this.context;
    store.dispatch(clickBagel(evt))
  }
	componentWillUnmount() {
		this.unsubscribe();
	}
  render(){
    var { store } = this.context;
    var bagel = store.getState().bagel;

    return (
      <div className='bagel'>
        <button onClick={ this.handleClick.bind(this) }><img src={bagel.icon} alt="BagelCount" /></button>
        <h1>Produced:  { Math.floor(bagel.produced) }</h1>
        <h1>Production: { Math.floor(bagel.production) }</h1>
      </div>
    )
  }
}
Bagel.contextTypes = {
	store: PropTypes.object
}
export default Bagel;
