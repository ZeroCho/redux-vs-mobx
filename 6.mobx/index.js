const { observable, autorun, reaction, action, runInAction, computed } = require('mobx');

const state = observable({
  compA: 'a',
  compB: 12,
  compC: null,
});

autorun(() => {
  console.log('A changed', state.compA);
  console.log('C changed', state.compC);
});

reaction(() => {
  return state.compB;
}, () => {
  console.log('B reaction', state.compB);
});

runInAction(() => {
  state.compA = 'c';
  state.compB = 25;
  state.compC = 'c';
});

runInAction(() => {
  state.compC = 'd';
});
