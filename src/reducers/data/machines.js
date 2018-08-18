var defaultMachines = [
  {id: "pot", name:"Hot Pot", generates: 0.5, cost: 10, src:"img/bagel-garlic.png", isVisible: true, isReadable: false, makeVisible:['baker']},
  {id: "baker", name: "Special Baker", generates: 2, cost: 1e2, src:"img/bagel-cheddar.png", isVisible: false, isReadable: false, makeVisible:['interns'] },
  {id: "interns", name:"Helpers", generates: 5, cost: 1e3, src:"img/bagel-chevy.png", isVisible: false, isReadable: false, makeVisible:['machine'] },
  {id: "machine", name: "Bagel Machine", generates: 100, cost: 1e4, src:"img/bagel-egg.png", isVisible: false, isReadable: false, makeVisible:['witch', 'newYork'] },
  {id: "witch", name: "Witches Tit", generates: 1000, cost: 1e5, src:"img/bagel-onion.png", isVisible: false, isReadable: false },
  {id: "newYork", name: "New York", generates: 10000, cost: 1e6, src:"img/bagel-pesto.png", isVisible: false, isReadable: false, makeVisible:['empireState'] },
  {id: "empireState", name: "Empire State", generates: 20000, cost: 1e7, src:"img/bagel-pizza.png", isVisible: false, isReadable: false, makeVisible:['mutantBagel'] },
  {id: "mutantBagel", name:"Mutant Bagel", generates: 50000, cost: 1e8, src:"img/bagel-chocolate-chip.png", isVisible: false, isReadable: false, makeVisible:['heroBagel'] },
  {id: "heroBagel", name:"Hero Bagel", generates: 1e6, cost: 1e9, src:"img/bagel-multi-grain.png", isVisible: false, isReadable: false, makeVisible:['godBagel'] },
  {id: "godBagel", name:"God Bagel", generates: 1e5, cost: 1e10, src:"img/bagel-pumpernickel-rye-everything.png", isVisible: false, isReadable: false, makeVisible:[] }
];

export default defaultMachines;
