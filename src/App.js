import React from 'react';

const welcome = {
  name: 'Carlos',
  lang: 'ReactJS'
};

// To show rendering function in JSX
const getLang = (lang) => {
  return lang;
}

// Root component or parent component of the List, Search components
function App() {
  const stories = [
    {
      title: 'React',
      url: 'http://reactjs.org/',
      author: 'Jordan Walke',
      num_comment: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'http//redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comment: 2,
      points: 5,
      objectID: 1,
    },
  ];

  // Initiate Search state
  const [searchTerm, setSearchTerm] = React.useState('React');

  // Create callback handler
  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  //  Filter List with searched term (words)
  const searchedStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Return view JSX
  return (
    <div>
      <h1>My Hacker Stories</h1>
      {/* Render primitive variables */}
      <h3>Hello {welcome.name} and welcome to {getLang(welcome.lang)}!</h3>

      {/* Call Search component */}
      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      {/* Call ListDisplay component */}
      <ListDisplay list={searchedStories} />

      {/* Footnote */}
      <hr />
      <p><i>Code by {name.getName()}</i></p>
    </div>
  );
};

// Create ListDisplay componet to render array
// Child component of the App component and sibling component of Search
const ListDisplay = props =>
  props.list.map(item => (
    <div key={item.objectID}>
      <span>{item.title}-</span>
      <span>
        <a href={item.url}>{item.url}-</a>
      </span>
      <span> {item.author}-</span>
      <span>{item.num_comment}-</span>
      <span>{item.points}</span>
    </div>
  ));

// Create Search component
const Search = props =>
  <div className="search-box">
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" value={props.search} onChange={props.onSearch} />
  </div>




class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to retur full name
  getName() {
    return this.firstName + " " + this.lastName;
  }
};

// Cretate an class instantiation 
const name = new Developer('Carlos', 'Mertens');

export default App;
