import React from 'react';
import PropTypes from 'prop-types';

// id는 Food 컴포넌트에 전달되지않음
// 단지 react 컴포넌트 내부에서 사용하려고 만든 것
const foodILike = [
  {
    id: 1,
    name : "kimchi",
    color : "red",
    rating: 5
  },
  {
    id:2,
    name : "noodle",
    color : "yellow",
    rating: 4.9
  },
  {
    id:3,
    name : "mint",
    color : "green",
    rating: 4.8
  }
];

/*
function renderFood(dish) {
  //map 은 각각 item 별로 함수를 호출함
  return <Food name={dish.name} color={dish.color}/>
}
*/
// function component
function Food({name, color, rating}) {
  
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <div>this color is {color}</div>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
  //isRequired 를 하지 않으면 number 이거나 undefined 중 하나 이기 때문에 에러가 나지않는다
}

function App() {
  return (
    <div className="App">
     {/* {console.log(foodILike.map(renderFood))}
       <Food fav = "kimchi"/>
      fav 라는 이름의 property를 kimchi 라는 value 를 준 것*/}
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          color={dish.color}
          rating={dish.rating} />
      ))}
      {/* dish = object name,pic = props */}
    </div>
  );
}

export default App;
