import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>//리액트에서 제공하는 검사도구. 개발모드일때만 디버그를 하며 해당태그로 감싸져 있는 부분은 자손까지 검사(로그 두번찍힘;;)
    <App />
  // </React.StrictMode>
);

