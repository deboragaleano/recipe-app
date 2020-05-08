import React, { Component } from 'react'
import {Card, Badge} from 'react-bootstrap';

class RecipeCard extends Component {
    render() {
        return(
            <Card className="h-100 shadow-sm bg-white rounded">
                <Card.Title className="mb-0 font-weight-bold">{this.props.data.name}</Card.Title>
                <Card.Img variant="top" src={this.props.data.image} alt={this.props.data.name}/> 
                <Card.Body className="d-flex flex-column">
                    <div className="d-flex mb-2 justify-content-between">
                    Ingredients: {this.props.data.ingredients}
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default RecipeCard;