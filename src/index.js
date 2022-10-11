import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import './styles/index.css';

import { Layout } from 'antd';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { LandingPage } from './components/pages/Landing/index';
import { LoginPage } from './components/pages/Login/index';
import NavBar from './components/pages/Navbars/Navbar';

const store = createStore(applyMiddleware(thunk));
window.store = store;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Layout>
          <NavBar />
          <App />
          {/* <Footer /> */}
        </Layout>
      </React.StrictMode>
    </Router>
  </Provider>  
);

function App() {

  return (
    <Layout.Content>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Layout.Content>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
