import React, { Component } from 'react';

const style = {
  container: {
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
  },
  header: {
    borderBottom: '1px solid grey',
    height: '100%',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
  },
};

class App extends Component {
  render() {
    return (
      <div style={style.container}>
        <header style={style.header}>
          <h1>
            <span aria-label="train-emoji" role="img">
              🚂
            </span>
            <span aria-label="train-emoji" role="img">
              🚂
            </span>
            <span aria-label="train-emoji" role="img">
              🚂
            </span>
            <span>toy train react</span>
          </h1>
        </header>
        <main style={style.main} />
      </div>
    );
  }
}

export default App;
