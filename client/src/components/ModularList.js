import React, { Component } from 'react';
import {
    Container, 
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v4 as uuid} from 'uuid'; //temporary before connecting to database

class ModularList extends Component {
    state = {
        items: [
            {id: uuid(), name: 'Math 115'},
            {id: uuid(), name: 'ECE 190'},
            {id: uuid(), name: 'ARTS 190'},
            {id: uuid(), name: 'Math 117'},
        ]
    }

    render() {
        const { items } = this.state;
        return (
            <Container>
                <Button 
                    color="dark" 
                    style={{marginBottom: '2rem'}} 
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }));
                        }
                    }
                }>Add Item</Button>
            </Container>
        );
    }
}



export default ModularList;