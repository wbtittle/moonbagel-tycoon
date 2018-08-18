import defaultBagel from './data/bagel'
const bagel = ( state=defaultBagel, action ) => {

	switch(action.type) {

		case 'BUY_MACHINE':
			console.log(action);
			return {
				...state,
				production: state.production + action.generates,
				produced: state.produced - action.cost

			}

		case 'CLICK_BAGEL':
			return { produced: state.produced++, ...state }

		case 'TIME_INTERVAL':
			return {
					...state,
					produced: state.produced+state.production

			};

		case 'RESET_GAME':
			return defaultBagel;

		default:
			return state;
	}

};

export default bagel;
