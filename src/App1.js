import React from 'react';

function Food({name, color}) {
  
  return <div>
    <h2>I like {name}</h2>
    <div>this color is {color}</div>
  </div>
}

const foodILike = [
  {
    name : "kimchi",
    color : "red"
  },
  {
    name : "noodle",
    color : "yellow"
  },
  {
    name : "mint",
    color : "green"
  },
];

function App() {
  return (
    <div className="App">
      hello
       {/*<Food fav = "kimchi"/>
      fav 라는 이름의 property를 kimchi 라는 value 를 준 것*/}
      {foodILike.map(dish => (
        <Food name={dish.name} color={dish.color}/>
      ))}
      {/* dish = object name,pic = props */}
    </div>
  );
}

export default App;
