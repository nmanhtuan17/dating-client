import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import {Provider} from "react-redux";
import {persistor, store} from "./store"
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from "antd";
import {ToastContainer} from "react-toastify";
import {antdConfigTheme} from "./config/antdConfigTheme";
import SocketProvider from "@/helper/SocketProvider.tsx";
import {AuthHelper} from "@/helper/AuthHelper.tsx";
import {NotificationHelper} from "@/helper/NotificationHelper.tsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider
          theme={antdConfigTheme}
        >
          <SocketProvider>
            <AuthHelper />
            <NotificationHelper />
            <App/>
          </SocketProvider>
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
          <ToastContainer/>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

