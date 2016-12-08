import React, { Component } from 'react';
import logo from './travis_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Travis</h2>
        </div>
        <p className="App-intro">
          <ul>
            <li><a href="http://www.steveklabnik.com/automatically_update_github_pages_with_travis_example/">Automatically Update GitHub pages with Travis example</a></li>
            <li><a href="https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db#.1pbwnjand">Publishing GH-Pages with Travis CI</a></li>
            <li><a href="http://blog.tgrrtt.com/exploring-the-travisci-configuration-file">Exploring the TravisCI configuration file</a></li>
            <li><a href="https://github.com/travis-ci/travis-ci/issues/758#issuecomment-10325537">Travis won't fail on after_*</a></li>
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
