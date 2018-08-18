import { combineReducers } from 'redux';
import machines from './machines';
import achievements from './achievements';
import bagel from './bagel';
import stocks from './stocks';

const bagelTycoon = combineReducers({
	machines,
	achievements,
  stocks,
  bagel
});

export default bagelTycoon;
