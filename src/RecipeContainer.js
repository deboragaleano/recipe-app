import React, { Component } from 'react'; 
import data from './data/data.json'; 
import RecipeCard from "./RecipeCard"; 
import {random} from './helpers';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { 
    Container, Row, Col, Button, 
    Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class RecipeContainer extends Component {
    static defaultProps = {
        recipes: data,
        numRecipes: 3
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
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="#">Recipe App</NavbarBrand>
                </Navbar>
                <Jumbotron>
                {/*TODO: Toggle the titles when clicking the button*/}
                <h1 className="display-3">Make a new recipe today!</h1>
                <p className="lead">Learn how to cook something new. Check a random choice below! 
                {/* <FontAwesomeIcon icon={faThumbsUp}/> */}
                </p>
                    <p>
                    <Row>
                        {this.state.recipe && this.state.recipe.map(r => ( 
                            <Col xs="4" key={`${r.name}`}>
                                <RecipeCard data={r} />
                            </Col>
                        ))}
                    </Row>
                    <Button
                        color='primary'
                        size='lg'
                        onClick={this.handleClick}>
                        Click me!
                    </Button>
                    </p>
                </Jumbotron>
            </Container>
            )
    }
    
}

export default RecipeContainer;  