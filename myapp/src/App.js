import Home from "./pages/Home"
import About from "./pages/About"
import React from 'react'
import {Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>   |   <Link to="/about">About</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}></Route>

        
      </Routes>
      
    </div>
  );
}// js 함수에서도 html을 쓸 수 있다 -> JSX

export default App;
//Link ==a 태그이고, url입력이 들어오면 Route에 등록되어있는 똑같은애를 찾아서 element를 호출해줌
