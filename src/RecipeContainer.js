import React, { Component } from 'react'; 
import data from './data/data.json'; 
import RecipeCard from "./RecipeCard"; 
import {random} from './helpers'

class RecipeContainer extends Component {
    static defaultProps = {
        recipes: data,
        numRecipes: 4
    }

    constructor(props) {
        super(props);
        this.state = {
            recipe: null,
        }
        this.handleClick = this.handleClick.bind(this); 
    } 

    generate() {
        let randomRecipes = Array.from({length: this.props.numRecipes}, () => random(this.props.recipes));
        let UniqueRecipes = [...new Set(randomRecipes)]
        this.setState({
            recipe: UniqueRecipes
        })
    }

    handleClick() {
        this.generate()
    }

    render() {
        return (
            <div>
                {/*TOGGLE THESE TEXT WHEN CLICKING THE BUTTON*/}
                <h1>Want to make something new today?</h1>
                <p>Check the button below to find out!</p>
                {this.state.recipe && this.state.recipe.map(r => ( 
                    <div>
                    <h1>Choose one of these recipes!</h1>
                    <RecipeCard data={r} />
                    </div>
                ))}
                   {/*CHANGE TEXT OF BUTTON TO SEE DIFFERENT OPTIONS*/}
                <button onClick={this.handleClick}>Click me!</button>
            </div>
            )
    }
    
}

export default RecipeContainer;  