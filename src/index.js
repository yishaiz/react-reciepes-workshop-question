import React from "react";
import ReactDOM from "react-dom";
import Recipes from './recipes';

const recipes = ["Waffel", "Omellete"];

class App extends React.Component {
    constructor() {
        super();

        this.state = {recipes};

        this.addRecipe = this.addRecipe.bind(this)

        setTimeout(
            ()=> {
                this.setState({
                    recipes: this.state.recipes.concat("Shakshuka")
                })
            }, 1500
        );

    }

    addRecipe(event) {

        event.preventDefault();

        const {value: recipeName}= this.refs.recipeNameInput;

        console.log('new value', recipeName);

        this.setState({
            recipes: this.state.recipes.concat(recipeName)
        });

        this.refs.recipeNameInput.value = '';
    }

    render() {
        return (
            <div>
                <Recipes recipes={this.state.recipes}/>

                <form onSubmit={this.addRecipe}>
                    <input type="text" ref="recipeNameInput"/>
                    <button>Add Recipe</button>
                </form>

            </div>
        )
    }


    componentDidMount() {
        console.log('I am mounted ! - App')
    }

}

ReactDOM.render(
    // React.createElement(App),
    <App/>,
    document.getElementById('root')
);