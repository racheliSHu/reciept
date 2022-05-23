import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { userReducer } from './redux/userReducer/userReducer';
import App from "./App";

const rootElement = document.getElementById("root");
const store = createStore(userReducer)
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  </StrictMode>,
  rootElement
);
