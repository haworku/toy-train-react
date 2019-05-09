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
  componentDidMount() {
    console.log('Here!');
  }

  render() {
    return (
      <div style={style.container}>
        <header style={style.header}>
          toy train react
          <span aria-label="train-emoji" role="img">
            🚂
          </span>
        </header>
        <main style={style.main} />
      </div>
    );
  }
}

export default App;
