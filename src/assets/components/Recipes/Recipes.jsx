import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleWantToCook}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="w-full md:w-4/5 lg:4/5 mt-12 ">
      

      <div >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {recipes.map((recipe, index) => (
            <Recipe key={index} recipe={recipe} handleWantToCook={handleWantToCook}></Recipe>
          ))}
        </div>
        
      </div>
    </div>
  );
};

Recipes.propTypes = {
    handleWantToCook: PropTypes.func.isRequired
}

export default Recipes;
