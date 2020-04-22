import React from 'react';

const welcome = {
  name: 'Carlos',
  lang: 'ReactJS'
};

const list = [
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
]

// To show rendering function in JSX
function getLang(lang) {
  return lang;
}

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      {/* Render primitive variables */}
      <p>Hello {welcome.name} and welcome to {getLang(welcome.lang)}!</p>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      {/* render the list here */}
      {list.map(function(item) {
        return <div>{item.title}</div>;
      })}

      <br />

      {list.map(item => {
        return <div>{item.url}</ div>;
      })}

      <br />

      {list.map(function(item) {
        return (
          <div key={item.objectID}>
            <span>{item.title}</span> <br />
            <span>
              <a href={item.url}>{item.url}</a>
            </span> <br />
            <span> {item.author}</span> <br />
            <span>{item.num_comment}</span> <br />
            <span>{item.points}</span> <br /> <br />
          </div>
        );
      })}

    </div>
  );
}

export default App;
