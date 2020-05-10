import React, { Component } from 'react'
import { 
    Card, CardImg, CardText, CardBody, 
    CardTitle, Badge, Button 
} from 'reactstrap';

class RecipeCard extends Component {
    render() {
        return(
            <Card body>
                <div className="d-flex mb-2 justify-content-between">
                    <CardTitle className="mb-0 font-weight-bold">{this.props.data.name}</CardTitle>
                </div>
                <CardImg top width="100%" src={this.props.data.image} alt={this.props.data.name}/> 
                <CardText className="text-left">
                    <strong>Ingredients:</strong>{this.props.data.ingredients.split('\n').map((i, key) => (
                    <li key={key}>{i}</li>))}
                </CardText>
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