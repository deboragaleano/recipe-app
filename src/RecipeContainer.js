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

                    <InputGroup size="md w-50 mx-auto">
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
                    <div>
                    {this.state.meals.map((meal, index) => (
                        <div key={index}>
                    <RecipeCard title={meal.strMeal} img={meal.strMealThumb} />
                    </div>
                    ))}
                    </div>
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
 * - Change RecipeCard and add more information
 * - Don't show all results but only about in a Column/Row 
 */