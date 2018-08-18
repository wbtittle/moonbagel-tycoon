import defaultAchievements from './data/achievements'
const achievements = ( state=defaultAchievements, action ) => {

	switch(action.type) {

		case 'BUY_STOCK':
			return action.value;

    case 'SELL_STOCK':
  			return action.value;

		case 'RESET_GAME':
			return state;

		default:
			return state;
	}

};

export default achievements;
