import React from "react";

const welcome = {
  name: "Carlos",
  lang: "ReactJS",
};

// To show rendering function in JSX
const getLang = (lang) => {
  return lang;
};

// List of stories (Initial)
const initialStories = [
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
  // Initiate search state
  const [searchTerm, setSearchTerm] = useSemiPersistentSate("search", "Go");

  // Initiate stories list states
  const [stories, setStories] = React.useState(initialStories);

  // Create callback handler to remove item
  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );

    setStories(newStories);
  };

  // Create callback handler to get input state
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  //  Filter List with searchTerm state
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Return JSX
  return (
    <>
      <h1>My Hacker Stories</h1>
      <h3>
        Hello {welcome.name} and welcome to {getLang(welcome.lang)}!
      </h3>

      {/* Call InputWithLabel component */}
      <InputWithLabel
        id='search'
        value={searchTerm}
        isfocused
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <hr />

      {/* Call List component */}
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />

      {/* Footnote */}
      <hr />
      <p>
        <i>Code by {name.getName()}</i>
      </p>
    </>
  );
}

// Create List component handler to map list
const List = ({ list, onRemoveItem }) =>
  list.map((item) => (
    // Call Item component
    <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
  ));

// Create Item componet to display list and to remove element
const Item = ({ item, onRemoveItem }) => {
  // Create function handler to remove item (Example)
  // function handleRemoveItem() {
  // onRemoveItem(item);
  // }
  // Note: We will use function into JSX onClick

  return (
    <div>
      <span>
        <button type='button' onClick={() => onRemoveItem(item)}>
          X
        </button>
      </span>
      <span>{item.title}-</span>
      <span>
        <a href={item.url}>{item.url}</a>
      </span>
      <span> {item.author}-</span>
      <span>{item.num_comments}-</span>
      <span>{item.points}</span>
    </div>
  );
};

// Create reusable Search component destructuring the props
const InputWithLabel = ({
  id,
  value,
  type = "text",
  onInputChange,
  isFocused,
  children,
}) => {
  // Implement imperative focus attribute
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        autoFocus={isFocused}
      />
    </>
  );
};

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

// Cretate a class instantiation
const name = new Developer("Carlos", "Mertens");

export default App;
