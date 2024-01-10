import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import {Provider} from "react-redux";
import {persistor, store} from "./Store/store"
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from "react-router-dom";
import AuthProvider from "./Helper/AuthProvider";
import {ConfigProvider} from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider
          theme={{
            token: {
              fontSize: 14,
            },
          }}
        >

          <AuthProvider />
          <App/>
        </ConfigProvider>

      </PersistGate>
    </Provider>
  </BrowserRouter>
);

