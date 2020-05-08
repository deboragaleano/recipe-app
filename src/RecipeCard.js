import React, { Component } from 'react'
import {Card, Badge, Button} from 'react-bootstrap';
import './Card.css'

class RecipeCard extends Component {
    render() {
        return(
            <Card className="h-100 shadow-sm bg-white rounded">
                <Card.Img className="Card" variant="top" src={this.props.data.image} alt={this.props.data.name}/> 
                <Card.Body className="d-flex flex-column">
                    <div className="d-flex mb-2 justify-content-between">
                        <Card.Title className="mb-0 font-weight-bold">{this.props.data.name}</Card.Title>
                        <Badge pill className="mb-1" variant="warning"> 
                        {this.props.data.prepTime}
                        </Badge>
                    </div>
                    <Card.Text className="text-secondary">
                        {/* TODO: Break these lines into <li></li>*/}
                    Ingredients: {this.props.data.ingredients.replace(/(\r\n|\n|\r)/gm,", ")}
                    </Card.Text>
                    <Button 
                        className="mt-auto font-weight-bold"
                        variant="secondary"
                        block
                        href={this.props.data.url}
                        target="_blank"
                    >
                    Learn more
                    </Button>
                </Card.Body>
            </Card>
        )
    }
}

export default RecipeCard;