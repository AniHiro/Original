import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import { store, persistor } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={<div>Загрузка...</div>} persistor={persistor}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </PersistGate> 
    </Provider>
  </React.StrictMode>
);

