import PropTypes from 'prop-types';
import { AiOutlineFire } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";

const Recipe = ({ recipe, handleWantToCook }) => {
  const { id, name, image, description, ingredients, time, calories } = recipe;
  return (
    <div className="card bg-base-100 shadow-xl border ">
      <figure className="px-6 pt-6">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body space-y-1">
        <h2 className="text-xl font-bold font-lexend">{name}</h2>
        <p className="font-fira text-customGray">{description}</p>
        <hr />
        <div className="">
          <h2 className="text-xl font-bold font-lexend">
            Ingredients: {ingredients.length}
          </h2>

          <div className="ml-3">
          {ingredients.map((ingredient, index) => (
            <li className="font-fira text-customGray mt-1" key={index}>
            {ingredient}
            </li>
          ))}
          </div>
        </div>
        <hr />
        <div className="flex gap-6 font-fira text-customGray">
          <div className="flex gap-2 justify-center items-center">
            <IoTimeOutline />
            <p>{time} minutes</p>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <AiOutlineFire />
            <p>{calories} calories</p>
          </div>
        </div>
        <div className="mt-3">
          <button onClick={() => handleWantToCook(recipe)} className="btn rounded-full bg-customGreen border-0 font-bold text-lg px-6">
          Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func.isRequired

}

export default Recipe;
