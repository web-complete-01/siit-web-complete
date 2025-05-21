import { App } from './rockPaperScissors';

// const obj = { 
//   test: 'ceva',
//   App: 'altceva',
// };

// const { test, App } = obj;

const appContainer = document.querySelector('#app');

// type guard
if(appContainer) {
  appContainer.append(App);
}
