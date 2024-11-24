import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Home from './home';
// import Hello from "./image"
// import Header from "./header"
// import Footer from "./footer"
// import Class1 from "./class"
// import Mobile from "./mobile"
import Card from "./cards.jsx"
// import Class from "./class2.jsx"
// import Form from "./form.jsx"
import FakeStore from "./fakestore"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home/> */}
    {/* <Header/> */}
    {/* <Hello/> */}
    {/* <Footer/> */}
    {/* <Class1/> */}
    {/* <Mobile/> */}
    <Card/>
    {/* <Class/> */}
    {/* <Form/> */}
    <FakeStore/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
