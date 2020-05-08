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
            recipe: []
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
                {this.state.recipe.map(r => ( 
                    <RecipeCard data={r} />
                ))}
                <button onClick={this.handleClick}>Check other options!</button>
            </div>
            )
    }
    
}

export default RecipeContainer;  