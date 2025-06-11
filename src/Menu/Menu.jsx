import React, { useEffect, useState } from 'react'
import SingleMenu from '../SingleMenu/SingleMenu';
import "./Menu.css"

const Menu = () => {
    const [meals, setMeals] = useState([]);
    const handleClick = (e) => {
        e.preventDefault();
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.menu_input.value}`)
        .then(res => res.json())
        .then(res => setMeals(...meals, res.meals))
    };
  return (
    <div className='menus'>
        <form onSubmit={handleClick}>
            <input type="text" name="menu_input" id="menu_input"/>
            <input type="submit" />
        </form>
        {meals.map((meal) => {
            return <SingleMenu key={meal.idMeal} meal={meal}/>
        })}
    </div>
  )
}

export default Menu