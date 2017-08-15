//original code
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import App from './components/app';
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));



//const means "this is the final value - it won't change" - App won't change down the line
const App = function() {
  return <div>Hi!</div>;
}
//1.we want to create a new component. this component should produce html.
//2.so take this component's HTML and put it on the page (in the DOM)
React.render(App);
