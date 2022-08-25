import './Menu.css';


function MenuRecipe({recipeAccept}){
  return(
    <>
      <div className="recipe-sec">
        <img className="recipe-img" src={recipeAccept['recipe']['image']} />
        <p className="recipe-name">{recipeAccept["recipe"]["label"]}</p>
      </div>
    </>
  )
}

export default MenuRecipe;