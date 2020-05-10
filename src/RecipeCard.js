import React, { Component } from 'react'
import { 
    Card, CardImg, CardTitle, ListGroup, 
    Button, ListGroupItem } from 'reactstrap';

class RecipeCard extends Component {
    render() {
        return(
            <Card body>
                <div className="d-flex mb-2 justify-content-between">
                    <CardTitle className="mb-0 font-weight-bold text-center">{this.props.data.name}</CardTitle>
                </div>
                <CardImg top width="100%" src={this.props.data.image} alt={this.props.data.name}/> 
                <div className="card-text text-left">
                    <strong>Ingredients:</strong>
                    <ListGroup >
                        {this.props.data.ingredients.split('\n').map((i, key) => (
                        <ListGroupItem className="hidden" key={key}>{i}</ListGroupItem>))}
                    </ListGroup>
                </div>
                <Button 
                    href={this.props.data.url}
                    target="_blank"
                >
                Learn more
                </Button>
            </Card>
        )
    }
}

export default RecipeCard;