import React, {Component} from 'react';
import { connect } from 'react-redux'
//import Authentication from "./authentication";
//import Register from "./register";
import { submitRegister } from '../actions/authActions';
import { Form} from "react-bootstrap";

class Register extends Component {

    constructor() {
        // eslint-disable-next-line no-undef
        super(props);
        this.updateDetails = this.updateDetails.bind(this);
        this.register = this.register.bind(this);

        this.state = {
            details:{
                name: '',
                username: '',
                password: ''
            }
        };
    }
    updateDetails(event){
        let updateDetails = Object.assign( {}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState( {
            details: updateDetails
        });

    }

    register() {
        const {dispatch} = this.props;
        dispatch(submitRegister(this.state.details));
    }

    render(){
        return  (
            <Form className='form-horizontal'>
                <Form.Group controlId='username'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.updateDetails} value={this.state.details.name} type="text" placeholder="Enter text" />
                </Form.Group>

                <Form.Group controlId="username">
                    <Form.Label>password</Form.Label>
                    <Form.Control onChange={this.updateDetails} value={this.state.details.username} type="email" placeholder="email" />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>password</Form.Label>
                    <Form.Control onChange={this.updateDetails} value={this.state.details.password} type="password" placeholder="password" />
                </Form.Group>
                <button onClick={this.register}>Sign in</button>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(Register);