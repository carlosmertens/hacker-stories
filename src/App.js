import React from "react";

const welcome = {
  name: "Carlos",
  lang: "ReactJS",
};

// To show rendering function in JSX
const getLang = (lang) => {
  return lang;
};

// Create custom hook with (useState and useEffect)
const useSemiPersistentSate = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

// Root component or parent component of the List, Search components
function App() {
  const stories = [
    {
      title: "React",
      url: "http://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "http//redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: "Python",
      url: "http://python.org/",
      author: "Guido van Rossum",
      num_comments: 3,
      points: 4,
      objectID: 2,
    },
    {
      title: "Go",
      url: "http://golang.org/",
      author: "Robert Griesemer, Rob Pike, and Ken Thompson",
      num_comments: 3,
      points: 4,
      objectID: 3,
    },
  ];

  // Initiate Search state
  const [searchTerm, setSearchTerm] = useSemiPersistentSate("search", "Go");

  // Create callback handler
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  //  Filter List with searched term (words)
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Return view JSX
  return (
    <>
      <h1>My Hacker Stories</h1>
      {/* Render primitive variables */}
      <h3>
        Hello {welcome.name} and welcome to {getLang(welcome.lang)}!
      </h3>

      {/* Call Search component */}
      <InputWithLabel
        id='search'
        label='Search:'
        value={searchTerm}
        onInputChange={handleSearch}
      />

      <hr />

      {/* Call ListDisplay component */}
      <ListDisplay list={searchedStories} />

      {/* Footnote */}
      <hr />
      <p>
        <i>Code by {name.getName()}</i>
      </p>
    </>
  );
}

// Create ListDisplay componet to render array
// Child component of the App component and sibling component of Search
// Use rest operatos (...) to separate and to map ID and items
const ListDisplay = ({ list }) =>
  list.map(({ objectID, ...item }) => (
    <ItemList key={item.objectID} {...item} />
  ));

// Nested Destructuring the props
const ItemList = ({ title, url, author, num_comments, points }) => (
  <div>
    <span>{title}-</span>
    <span>
      <a href={url}>{url}</a>
    </span>
    <span> {author}-</span>
    <span>{num_comments}-</span>
    <span>{points}</span>
  </div>
);

// Create Search component
// TODO: Refactor component from arrow function concise body to block body
// Use object destructuring of the props
const InputWithLabel = ({ id, label, type = "text", value, onInputChange }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input id={id} type={type} value={value} onChange={onInputChange} />
  </>
);

class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to retur full name
  getName() {
    return this.firstName + " " + this.lastName;
  }
}

// Cretate an class instantiation
const name = new Developer("Carlos", "Mertens");

export default App;
