import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./Store/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
