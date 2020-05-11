import React, { Component } from 'react'; 
import RecipeCard from "./RecipeCard"; 

import { 
    Container, Row, Col, Button, 
    Navbar, NavbarBrand, Jumbotron,
    Input, InputGroup, InputGroupAddon} from 'reactstrap';

class RecipeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '', 
            meals: []
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.apiCall = this.apiCall.bind(this)
    } 

    handleOnChange(e) {
        this.setState({
            searchValue: e.target.value
        })
    }

    handleClick() {
        this.apiCall(this.state.searchValue)
    }

    apiCall(input) {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
        fetch(url)
        .then(resp => {
            return resp.json(); 
        })
        .then(data => {
            this.setState({
                meals: data.meals
            })
        })
    }
    

    render() {
        return (
            <Container>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="#">Recipe App</NavbarBrand>
                </Navbar>
                
                <Jumbotron>
                    {!this.state.isClicked && <div>
                    <h1 className="display-3">Make a new recipe today!</h1>
                    <p className="lead">Learn how to cook something new. Enter a meal below to find out!</p></div>}

                    <InputGroup size="md w-50 mx-auto my-3">
                        <Input 
                            placeholder="Find a delicious meal!"
                            onChange = {e => this.handleOnChange(e)}
                            value = {this.state.searchValue}
                            onKeyDown = {e => {if(e.key === 'Enter') {this.handleClick();}}}
                        />
                        <InputGroupAddon addonType="append">
                        <Button
                            color="primary"
                            onClick={this.handleClick}>
                                Search</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    
                    {this.state.meals ? (
                    <Row>
                        {this.state.meals.slice(0, 3).map((meal, index) => (
                            <Col xs="4" key={index}>
                                <RecipeCard data={meal} />
                            </Col>
                        ))}
                    </Row>
                        ) : (
                        <p>Try searching for a meal</p>
                        )}
                    
                </Jumbotron>
            </Container>
            )
    }
    
}

export default RecipeContainer;  



/**
 * TODO: 
 * - Show "find more <chicken> recipes CLICK BELOW THE RESULTS"
 * 
 */