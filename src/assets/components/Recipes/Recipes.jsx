import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("../../../../public/recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="w-full md:w-4/5 lg:4/5 mt-12 ">
      

      <div >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {recipes.map((recipe) => (
            <Recipe key="_id" recipe={recipe}></Recipe>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Recipes;
