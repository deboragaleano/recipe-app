import React, { Component } from 'react'; 
import data from './data/data.json'; 
import RecipeCard from "./RecipeCard"; 
import {random} from './helpers'
import {Container, Row, Col, Button} from 'react-bootstrap'; 

class RecipeContainer extends Component {
    static defaultProps = {
        recipes: data,
        numRecipes: 4
    }

    constructor(props) {
        super(props);
        this.state = {
            recipe: null,
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
            <Container>
                {/*TOGGLE THESE TEXT WHEN CLICKING THE BUTTON*/}
                <h1>Want to make something new today?</h1>
                <p>Check the button below to find out!</p>
                <Row>
                    {this.state.recipe && this.state.recipe.map(r => ( 
                        <Col xs={3} className="mb-5" key={`${r.name}`}>
                            <RecipeCard data={r} />
                        </Col>
                    ))}
                </Row>
                {/*CHANGE TEXT OF BUTTON TO SEE DIFFERENT OPTIONS*/}
                <Button
                    onClick={this.handleClick}>
                    Click me!
                </Button>
            </Container>
            )
    }
    
}

export default RecipeContainer;  