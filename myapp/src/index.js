import React from 'react'; //jsx를 쓰기위해 import하는 것
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'//브라우저 url입력했을 떄 라우팅하기 위해
import './index.css';
import App from './App';//이건 App.js를 의미 그리고 <App />태그로도 쓰임 (확장자가 .js이면 확장자 생략가능하다)
import About from './pages/About';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));// index.html의 <div id="root">를 가져온 것
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    
  </React.StrictMode>
  //결국 이부분이 index.html의 <div id="root"> 여기로 들어온다는 것 </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); //웹 퍼포먼스 측정하기 위한 라이브러리이다.

//npm start하는순간 제일 먼저 읽는 파일이 index.js이다

/**
 * 1.npm start
 * 2.index.js 실행
 * 3. index.html 에있는 id= root라는 객체를 가지고와서 createRoot로 만들어준다
 * 4. 그 안에 랜더링 시킬건데 랜더링할 코든는 App.js에 있다.
 */