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
  constructor(props) {
    super(props);
    //state is a plain javascript object that is used to record and react to user events,
    //each class based component has it's own state. { } is the state
    this.state = { term: '' }
  }
//onChange is an event handler
  render() {
    return (
      <div>
        <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

//allows SearchBar to be accessed by other components
export default SearchBar;
