import React, { Component } from 'react'

class RecipeCard extends Component {
    render() {
        return(
            <div>
                <p>Recipe Name: {this.props.data.name}</p>
                <img src={this.props.data.image} alt={this.props.data.name}/> 
                <p>Ingredients:</p>
                <ul>
                    {/*list the ingredients here, ADD URL OR LI */}
                    <li>{this.props.data.ingredients}</li>
                    </ul>
                <p>Instructions</p>
            </div>
        )
    }
}

export default RecipeCard;