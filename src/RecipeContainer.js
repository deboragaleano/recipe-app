import React, { Component } from 'react'; 
import data from './data/data.json'; 
import RecipeCard from "./RecipeCard"; 
import {random} from './helpers'

class RecipeContainer extends Component {
    static defaultProps = {
        recipes: data
    }
    
    constructor(props) {
        super(props);
        this.state = {
            recipe: random(this.props.recipes)
        }
        this.handleClick = this.handleClick.bind(this); 
    }

    generate() {
        //ADD THAT IT DOESN'T SHOW THE SAME ITEM WITH DO AND WHILE WEBDEV
        const newRecipe = random(this.props.recipes); 
        this.setState({
            recipe: newRecipe
        })
    }

    handleClick() {
        this.generate()
    }

    render() {
        return (
            <div>
                <RecipeCard data={this.state.recipe}/> 
                <button onClick={this.handleClick}>Check other options!</button>
            </div>
            )
    }
    
}

export default RecipeContainer;  