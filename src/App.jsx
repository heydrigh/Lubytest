import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from './context/auth';

import GlobalStyle from './styles/global';
import Routes from './routes';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </AuthProvider>
);

export default App;
