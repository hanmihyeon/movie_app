import React from 'react';

// class component 는 state 때문에..?? state는 object 이다.
// state에 바꾸고 싶은 data 를 넣는다
// App에서 data를 바꾸려면?
class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
  {/* state를 직접 변경하면 안되고 set 해야함
    이렇게하면 리액트는 렌더함수를 리프레시하지않기 때문
  this.state.count = 1; */}
  // setState 호출 할 때 마다 react는 새로운 state와 함께 렌더함수 호출
    this.setState(
      current => ({ count: this.state.count + 1 })
      // current 를 사용해 state를 set 하면 react에서 외부의 상태에 의존하지 않을 수 있다.
    );
  };
  minus = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  };
}

export default App;