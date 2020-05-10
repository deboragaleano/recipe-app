import React, { Component } from 'react'
import { 
    Card, CardImg, CardTitle, ListGroup, 
    Button, ListGroupItem } from 'reactstrap';

class RecipeCard extends Component {
    render() {
        return(
            <Card body>
                <div className="d-flex mb-2 justify-content-between">
                    <CardTitle className="mb-0 font-weight-bold text-center">{this.props.title}</CardTitle>
                </div>
                <CardImg top width="100%" src={this.props.img} alt={this.props.title}/> 
                <Button 
                    // href={this.props.data.url}
                    target="_blank"
                >
                Learn more
                </Button>
            </Card>
        )
    }
}

export default RecipeCard;