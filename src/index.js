import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
  
ReactDOM.render(
/*   
  <react component 를 보여주는 역할>
  JSX 개념 : React에서 (javascript + HTML)  조합 
  React application은 App component 하나만을 렌더링함 
  따라서, App 안에 다른 component들을 넣어야 된다.  
  */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 