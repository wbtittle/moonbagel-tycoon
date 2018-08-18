import defaultStocks from './data/stocks'
const stocks = ( state=defaultStocks, action ) => {

	switch(action.type) {

		case 'BUY_STOCK':
			return action.value;

    case 'SELL_STOCK':
  			return action.value;

		case 'RESET_GAME':
			return defaultStocks;

		default:
			return state;
	}

};

export default stocks;
