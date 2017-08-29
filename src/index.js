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

//state is a plain javascript object that is used to record and react to user events,
//each class based component has it's own state

import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; //pulls in the SearchBar component. No need to include .js so long as it is a .js file

const API_KEY = 'AIzaSyCwbRmrRhqp0my7FoeKwCAfmbUKjN-D6Us';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

//const means "this is the final value - it won't change" - App won't change down the line
//1.we want to create a new component. this component should produce html.
//2.so take this component's HTML and put it on the page (in the DOM)

//older code
// const App = function() {
//   return <div>Hi!</div>;
// }
//ES6 syntax to above
 const App = () => {
  return (
//calling SearchBar so it'll show up. wrapped the div in parens
    <div>
      <SearchBar />
    </div>
  );
 }

//ReactDOM.render(App); App is a class here, not an instance - have to wrap it in JSX tag
ReactDOM.render(<App />, document.querySelector('.container'));
//the above says "go find the div with class=container (in index.html) and try to render the <App /> component in that div"
