
import React from 'react';
import PropTypes from 'prop-types';

// class component
class App extends React.Component {

  // render 보다 먼저 호출
  constructor(props) {
      super(props);
      console.log("hello");
  }
  
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

  // render이후에 호출
  componentDidMount() {
    console.log("component rendered");
  }

  // render 실행 후 업데이트가 완료되면 호출
  componentDidUpdate() {
    console.log("i updted"); 
  }

  // component가 unmount될 때 호출
  componentWillUnmount() {
    console.log("goodbye component");
  }

  // render method
  render() {
      console.log("i am rendering");
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
