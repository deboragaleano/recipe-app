import React, { Component } from 'react'
import { 
    Card, CardImg, CardText, CardBody, 
    CardTitle, Badge, Button 
} from 'reactstrap';

class RecipeCard extends Component {
    render() {
        return(
            <Card>
                <CardImg top width="100%" src={this.props.data.image} alt={this.props.data.name}/> 
                <CardBody className="d-flex flex-column">
                    <div className="d-flex mb-2 justify-content-between">
                        <CardTitle className="mb-0 font-weight-bold">{this.props.data.name}</CardTitle>
                        <Badge color="light"> 
                        {this.props.data.prepTime}
                        </Badge>
                    </div>
                    <CardText>
                        {/* TODO: Break these lines into <li></li>*/}
                    Ingredients: {this.props.data.ingredients.replace(/(\r\n|\n|\r)/gm,", ")}
                    </CardText>
                    <Button 
                        // color="secondary"
                        href={this.props.data.url}
                        target="_blank"
                    >
                    Learn more
                    </Button>
                </CardBody>
            </Card>
        )
    }
}

export default RecipeCard;