import './Recipe.css';
import RecipeImg from '../../images/bt1.jpg';

function Recipe(){
  return(
    <>
      <div className="recipe-cont" id='Recipe'>
        <h1 className="rec-head">Discover Our Restaurant Story
        </h1>
        <p className="rec-par">You can visit our restaurant to taste our food. We also share the food recipe to the customer. so, they can make the sane food in their home.You can visit our restaurant to taste our food. We also share the food recipe to the customer. so, they can make the sane food in their home.You can visit our restaurant home.</p>
        <img src={RecipeImg} alt="img" />
      </div>
    </>
  )
}

export default Recipe;      