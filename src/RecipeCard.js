import React, { Component } from 'react'
import { 
    Card, CardImg, CardTitle, ListGroup, 
    Button, ListGroupItem } from 'reactstrap';

class RecipeCard extends Component {
    render() {
        return(
            <Card body>
                <div className="d-flex mb-2 justify-content-between">
                    <CardTitle className="mb-0 font-weight-bold text-center">{this.props.data.strMeal}</CardTitle>
                </div>
                <CardImg top width="100%" src={this.props.data.strMealThumb} alt={this.props.data.strMeal}/> 
                <div className="card-text text-left">
                    <ListGroup >
                        <ListGroupItem key={this.props.data.strMeal}><strong>Cuisine: </strong>{this.props.data.strArea}</ListGroupItem>
                        <ListGroupItem key={this.props.data.strMeal}><strong>Instructions: </strong></ListGroupItem>
                        {this.props.data.strInstructions.split('\r\n').slice(0, 3).map((i, key) => (
                        <ListGroupItem key={key}>{i}</ListGroupItem>))}
                    </ListGroup>
                </div>
                <Button 
                    href={this.props.data.strSource}
                    target="_blank"
                >
                Learn more
                </Button>
            </Card>
        )
    }
}

export default RecipeCard;

/**
 * TODO: 
 * - Embed Youtube video 
 * - Add <Read More> about instructions and fix recipe cards
 * - When clicking on the title or picture maybe take to a single CARD with ALL THE INFO of the recipe 
 */