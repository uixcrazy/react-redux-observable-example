import { Provider } from "react-redux";
import logo from './logo.svg';
import './App.css';

import store from "./store/configureStore";
import User from "./modules/UiUser";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <User />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

// https://techinscribed.com/clean-react-architecture-with-redux-immer-typescript-redux-observable/

export default App;
