const { observable, autorun, reaction, action, runInAction } = require('mobx');

const state = observable({
  compA: 'a',
  compB: 12,
  compC: null,
});

autorun(() => {
  console.log('changed', state.compA);
});

reaction(() => {
  return state.compB;
}, () => {
  console.log('reaction', state.compB);
});

runInAction(() => {
  state.compA = 'c';
  state.compB = 25;
  state.compC = 'c';
});

runInAction(() => {
  state.compC = 'd';
});
