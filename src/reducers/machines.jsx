import defaultMachines from "./data/machines"
const machine = ( state, action ) =>
{
	switch (action.type)
	{
		case 'BUY_MACHINE':
			if (action.id === state.id )
			{
				return {
					...state,
					generates: state.generates*1.1,
					cost: state.cost*1.1,
					isReadable: true

				}
			}
			else {
				return state;
			}

		case 'MAKE_VISIBLE':
			if (action.machines.indexOf(state.id)>-1)
			{
				console.log(action.machines, state.id);
				return { ...state, isVisible:true }
			}
			else {
				return state
			}
		default:
			return state;
	}
}





const machines = ( state=defaultMachines, action ) => {

	switch(action.type) {

		case 'BUY_MACHINE':
		 	return state.map( item => machine (item, action))

		case 'RESET_GAME':
			return defaultMachines;

		case 'MAKE_VISIBLE':
			return state.map( item => machine (item, action))

		default:
			return state;
	}

};

export default machines;
