import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Machine from './Machine'

class Machines extends Component {
	componentDidMount(){
		const { store } = this.context;
	 	this.unsubscribe = store.subscribe( () =>this.forceUpdate() );

	}

	componentWillUnmount() {
		this.unsubscribe();
	}

  render(){
    const { store } = this.context;
    var machines = store.getState().machines;
    return (
          machines.map( ( item )=> item.isVisible?<Machine key={item.id}  { ...item } />:'')
    )
  }
}
Machines.contextTypes = {
	store: PropTypes.object
}

export default Machines;
