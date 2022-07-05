import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import axios from "axios";
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as _redux from "../src/Components/redux";
import store, { persistor } from "../src/Components/redux/store";
const root = ReactDOM.createRoot(document.getElementById('root'));


const  base_url="http://77.68.116.225:8488/"


_redux.setupAxios(axios, store,base_url);
root.render(
  // <React.StrictMode>
    <App 
    // base_url={base_url}
      firm={"340100753856876300"}

      token={"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwidXNlcl9pZCI6MSwidHlwZSI6MSwiZmlybV9pZCI6IjM0MDEwMDc1Mzg1Njg3NjMwMCIsImV4cCI6MTY1NzYwODU4MiwianRpIjoicnRqOGpqdTN6Z2VtM2M5YjFuOGR3aXV3cHhiM251dXUifQ.l7OWa3VdU6L3vA-gqMWVWMs2KmnIVpRhwImnVJGNdyo"}

      ref_token={"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImlkIjoxLCJ0eXBlIjoxLCJmaXJtIjoiMzQwMTAwNzUzODU2ODc2MzAwIiwiZXhwIjoxNjg4NTM5NzgyLCJqdGkiOiJsMnQybzI0bHF5bDZhaGxjZTl4ajZyc2JhbjF0eWFhdiJ9.y0-YTtx2oOOOfIJNLvXTbx8l0kYq-hD29Q6bnXBXhc0"}
      post_id={"gAAAAABiw98F05ZGKJ3s4PjqOAB64Gd5Yucw9XqMxbYrGaOQRySXYvH4Wvo4lbi3L6swlF33LFO1V3voMvktotHs7TUT4rugTA=="}
      session_id={"IfUo8Y8VPgzgY0ns2OqHEgJp6kkEVSL7"}

     
      
      // onInvalidFirm={onInvalidFirm}
    />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
