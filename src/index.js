import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import Post from './Components/Post';
import Form from './Components/Form';
import References from './Components/References';
import Footer from './Components/Footer';

const head = ReactDOM.createRoot(document.getElementById('header'));
const lastSection = ReactDOM.createRoot(document.getElementById('last-section'));
const reference = ReactDOM.createRoot(document.getElementById('references'));
const footer = ReactDOM.createRoot(document.getElementById('footer-main'));

head.render(
  <Header/>
);

lastSection.render(
  <React.StrictMode>
    <Post/>
    <Form/>
  </React.StrictMode>
);

reference.render(
  <React.StrictMode>
    <References/>
  </React.StrictMode>
);


footer.render(
  <Footer/>
);

