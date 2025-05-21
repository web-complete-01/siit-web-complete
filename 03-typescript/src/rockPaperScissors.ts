const App = document.createElement('h1');
App.append('This is a title');

//default export
export default App;

const test = 'Paul';

//named export
export {
  test,
  App,
}
