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
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ConfigProvider
          theme={{
            token: {
              fontSize: 14,

            },
            components: {
              Menu: {
                itemSelectedBg: 'rgba(0, 0, 0, 0.06)',
                itemSelectedColor: '#000'
              },
            },
          }}
        >
          <AuthProvider />
          <App/>
        </ConfigProvider>
        </LocalizationProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

