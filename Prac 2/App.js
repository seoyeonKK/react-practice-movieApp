
import React from 'react';
import PropTypes from 'prop-types';


 /* 
 <설치할 것>
 npm i prop-types
 내가 받은 props가 내가 원하는 props인지 확인하는 패키지
 실수한 것에 대해 알려줌
 */

/* 
  App()은 부모 Component
  Panda(), renderPanda()는 자식 Component
 */
 
// id 값을 넣어야 unique key prop 문제가 생기지 않는다.
const pandaFamily = [
  {
    id : 1,
    name : "Fubao",
    age : 1,
    image : "http://www.incheonilbo.com/news/photo/202011/1065351_338033_179.jpg",
    rating : 1
  },
  {
    id : 2,
    name : "Ibao",
    age : 8,
    image : "https://cdn.joongboo.com/news/photo/201604/1061954_981304_3116.jpeg",
    rating : 2
  },
  {
    id : 3,
    name : "Rubao",
    age : 8,
    image : "https://pds.joins.com/news/component/newsis/201604/06/NISI20160406_0011552909_web.jpg", 
    rating : 3
  }
];

function Panda({ name, age, picture, rating }) {
  return <div>
    <h3> 안녕 나는 {name} 이야 </h3>
    <h3> 나는 {age}살 이지 </h3 >
    <h4> {rating}번째로 인기가 많아</h4>
    <img src = {picture} alt = {name} />
  </div>
}

// 얻고싶은 props에 대한 설명을 작성
// type 체크,  required 호출하는 방식 지정  
// 반드시 proptype라고 지정해야 함
Panda.prototype = {
  name : PropTypes.string.isRequired,
  age : PropTypes.number.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
}

// renderPanda()에서 Panda component에 각 prop를 대입해준다.
function renderPanda(panda) {
  console.log(panda); 
  return <Panda key={panda.id} name={panda.name} age={panda.age} picture={panda.image} />;
}

// react component (html을 반환하는 함수)
function App() {
  return (
    <div>
      {/* 1번 방법 -  App()에서 props에 대입해주는 방법 */}
      {/* panda는 object.이다. {object.name}, {object.age}  로 접근  */}
      {pandaFamily.map(panda => (
        <Panda 
          name = {panda.name} 
          age = {panda.age} 
          picture = {panda.image} 
          rating = {panda.rating} 
        />
      ))}; 

      {/* 2번 방법 -  function renderPanda()에서 props를 대입하는 방법 */}
      {/* {console.log(pandaFamily.map(renderPanda))};
      {pandaFamily.map(renderPanda)}; */}
    </div>
  );
}  

export default App;
