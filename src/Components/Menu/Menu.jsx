import './Menu.css';
import Axios from 'axios';
import {useState} from 'react';
import MenuRecipe from './MenuRecipe.jsx';
function Menu(){
  

  const [query,setQuery] = useState("");

  const[recipes,setRecipes] = useState([])

  
  var url = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=1a693ee9&app_key=
a4b9a4804a7214fd42439f8c8d46ae56`;

  async function getRecipes(){
    var result = await Axios.get(url);
    setRecipes(result.data.hits)
    console.log(result.data);
                             
  }

  const submit = (e) =>{
    e.preventDefault();
    getRecipes();
  }
  return(
    <>
      <div className="menu" id='Menu'>
        <h1>Our Fresh Food</h1>
        <form className="search" onSubmit={submit}>
          <input type="text" placeholder="Search Food" value={query} onChange={(e) => setQuery(e.target.value)} />
          <input type="submit" value="Search" />
        </form>
        <div className="menu-grid">
          {recipes.map(recipe => {
      return <MenuRecipe recipeAccept={recipe}/>;
          })}
        </div>
      </div>  
    </>
  )
}

export default Menu;