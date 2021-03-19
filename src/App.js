
import React from 'react';
import PropTypes from 'prop-types';

// class component
class App extends React.Component {
  /* 
  <state>
  class comonent는 state ojbect가 있음
  바뀔 수 있는 date를 넣는 공간
  */  
  state = {
    count : 0
  };

  /*  
  <js function 코드> 
  state 변경 시 setState를 호출한다.
  setState는 state를 refresh 하고 render function 을 호출함.  (data만 refresh 됨)
  */
  add = () => {
    console.log("add");
    this.setState(current => ({ count : this.state.count + 1 })); // current로 현재 state를 얻음.
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({ count : this.state.count - 1 })) ;
  }; 

  // render method
  render() {
    return (
      <div>
        <h1> The number is : {this.state.count} </h1>
         {/* 
          React에는 button에 onclick props를 제공함.  
          js function에 접근할 때 this를 사용한다. 
        */}
        <button onClick={this.add}>Add</button> 
        <button onClick={this.minus}>Minus</button>
      </div>  //  state data에 접근할 때 this를 사용한다.
    );
  }
}

export default App;
