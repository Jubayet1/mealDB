// import React, { useState } from 'react'

// const SingleMenu = ({meal}) => {
//     const userStyle = {
//         border: "2px solid black",
//         padding : "20px",
//         borderRadius : "20px", 
//     };
//     const [ingredient, setIngredient] = useState([]);
//     for(let i = 0; i < 21; i += 1){
//      const newIngredient = meal[`strIngredient${i}`];
//      setIngredient(...ingredient, newIngredient)
//      console.log(ingredient)
//     }
//   return (
//     <div style={userStyle}>
//         <h2>{meal.strMeal}</h2>
//         <h4>{meal.strArea}</h4>
//         <h4>{meal.strCategory}</h4>
//         {}
//     </div>
//   )
// }

// export default SingleMenu

import React, { useEffect, useState } from 'react';

const SingleMenu = ({ meal }) => {
  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    const ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
      const newIngredient = meal[`strIngredient${i}`];
      if (newIngredient) {
        ingredientsList.push(newIngredient);
      }
    }
    setIngredient(ingredientsList);
  }, [meal]);

  const userStyle = {
    border: "2px solid black",
    padding: "20px",
    borderRadius: "20px"
  };

  return (
    <div style={userStyle}>
      <h2>{meal.strMeal}</h2>
      <h4>{meal.strArea}</h4>
      <h4>{meal.strCategory}</h4>
      <ul>
        {ingredient.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleMenu;