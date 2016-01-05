import React, {Component, PropTypes} from 'react';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};

class App extends Component {

  static propTypes = {
    instructions: PropTypes.string,
  }

  static defaultProps = {
    ...Component.defaultProps,
    instructions: 'Usage instructions not provided.',
  }

  render() {
    const { instructions } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.welcome}>
          Welcome to React!
        </div>
        <div style={styles.instructions}>
          To get started, edit index.web.js
        </div>
        <div style={styles.instructions}>
          {instructions}
        </div>
      </div>
    );
  }
}

export default App;
