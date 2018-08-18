import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import bagelTycoon from './reducers';
import { loadState, saveState } from './localStorage';


const configureStore = () => {
	const persistedState = loadState();

	console.log("PERSISTED STATE :", persistedState);
	const store = createStore(bagelTycoon, persistedState);
	store.subscribe(throttle(() =>{
		saveState({
			stocks: store.getState().stocks,
			bagel: store.getState().bagel,
			achievements: store.getState().achievements,
			machines: store.getState().machines
		})
	}, 1000));

	console.log("LOADING STATE", store.getState());
	return store;
}

export default configureStore;
