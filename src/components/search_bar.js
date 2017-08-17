//searchbar element

//still need the import react element because of the JSX
import React, { Component } from 'react';

//this is a functional component because it has a function. one function - info goes in, JSX comes out
// const SearchBar = () => {
//   return <input />;
// };

//1.class component is used when the component needs some type of internal record keeping - more aware of itself, ability to say that "something changed about me"
//2.the below can be read as "define a new class called searchbar and give it access to all the functionality that react.component has"
class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)} />
  } //onChange is an event handler

}

//allows SearchBar to be accessed by other components
export default SearchBar;
