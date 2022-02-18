import React from "react";
import { useSelector } from "react-redux";

const RecipeList = () => {
    console.log("recipe list");
    const recipes = useSelector((state) => state.product.products);
    console.log(recipes);
    if(recipes){
        const recipeList = recipes.results.map((recipe) => {
            const id = recipe.id;
            const name = recipe.name;
            return (
                <div key={id}>
                    {name}
                </div>
            );
        });
        return (
            <>
                <h4>{recipeList}</h4>
            </>
        )
    }
    else{
        return <div></div>
    }
}

export default RecipeList;