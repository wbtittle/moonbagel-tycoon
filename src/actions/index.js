export const buyMachine = ( machine ) => ({
	type: 'BUY_MACHINE',
	...machine
});

export const sellMachine = ( machine ) => ({
	type: 'SELL_MACHINE',
  id: machine
});

export const buyStock = ( stock ) => ({
	type: 'BUY_STOCK',
	stock
});

export const sellStock = ( stock ) => ({
	type: 'SELL_STOCK',
	value: stock
});

export const clickBagel = ( clicked ) => ({
  type: 'CLICK_BAGEL',
  clicked
});

export const updateInterval = ( ) => ({
  type: 'TIME_INTERVAL'
})

export const resetGame = () => ({
  type: 'RESET_GAME'
})

export const makeVisible = ( machines ) => ({
  type: 'MAKE_VISIBLE',
  machines
})
