import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
//리액트 쿼리를 사용하기 위한 step1
const queryClinet = new QueryClient()

root.render(
  //<React.StrictMode>
    //리액트 쿼리 사용을 위한 step2
   
      <BrowserRouter> 
        <QueryClientProvider client={queryClinet}>
          <App /> 
        </QueryClientProvider>
      </BrowserRouter>
   
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
