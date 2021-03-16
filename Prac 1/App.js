
import React from 'react';

// function Potato({ fav }) { //  object 내부 property 직접 접근 가능 
function Potato(props) {
  console.log(props); // 로그에 props object 확인 가능
  console.log(props.fav);
  return <h1>I like {props.fav}</h1>;
  //  return <h1>I like {fav}</h1>; // props를 fav로 넘겨받았으면 property 직접 접근 가능 
}

// react component (html을 반환하는 함수)
function App() {
  return <div>
      <h1>Hello</h1>
      {/* <'Potato component' 'Property' ='Value'> */}
      <Potato fav ="gamza" >
        {/* something = {true} 
        papapa={["ddd", 1, 2, 3]} /> // 다양한 포맷 가능  */}
      </Potato>
      <Potato fav = "goguma"/>
      <Potato fav = "sweet potato" />
    </div>
} 

export default App;
   