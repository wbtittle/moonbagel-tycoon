import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainBoard from './MainBoard';

const Root = ({ store }) => (
	<Provider store={ store }>
		<Router >
			<div>
		      <Route path="/"  component={ MainBoard } />

			</div>
	    </Router>
    </Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired,
}

export default Root;
