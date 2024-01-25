import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import {Provider} from "react-redux";
import {persistor, store} from "./Store/store"
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from "react-router-dom";
import AuthProvider from "./Helper/AuthProvider";
import {ConfigProvider} from "antd";
import {ToastContainer} from "react-toastify";
import {antdConfigTheme} from "./config/antdConfigTheme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider
          theme={antdConfigTheme}
        >
          <AuthProvider />
          <App/>
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <ToastContainer />
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

