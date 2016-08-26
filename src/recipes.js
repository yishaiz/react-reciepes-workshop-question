import React from "react";
import Recipe from './recipe';

const Recipes = ({recipes}) => (
    <ul>
        {
            recipes.map(recipe => <Recipe name={recipe}
                                          key={recipe} />
            )
        }
    </ul>
);

export default Recipes;