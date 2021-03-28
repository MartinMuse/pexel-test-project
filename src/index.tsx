import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {Provider} from "react-redux";
import store from "./Redux/store";
import {BrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import {Loader} from "./Components/Loader/Loader";
import LangState from "./context/lang";
ReactDOM.render(
    <Provider store={store}>
       <Suspense fallback={<Loader/>}>
           <BrowserRouter>
               <LangState>
                   <App/>
               </LangState>
           </BrowserRouter>
       </Suspense>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
