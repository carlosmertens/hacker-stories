import React from 'react';

const welcome = {
  name: 'Carlos',
  lang: 'ReactJS'
};

function getLang(lang) {
  return lang;
}

function App() {
  return (
    <div>
      <h1>Hello {welcome.name} and welcome to {getLang(welcome.lang)}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
