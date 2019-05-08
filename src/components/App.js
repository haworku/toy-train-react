import React, { Component } from 'react';

const style = {
  container: {
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
  },
  header: {
    borderBottom: 'double',
    height: '2rem',
    lineHeight: '2rem',
    textAlign: 'center',
  },
  main: {
    display: 'flex',
    flex: 1,
  },
};

class App extends Component {
  render() {
    return (
      <div style={style.container}>
        <header style={style.header}>Made a Thing!</header>
        <main style={style.main} />
      </div>
    );
  }
}

export default App;
