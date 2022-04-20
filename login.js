import React, {Component} from 'react';
import { connect } from 'react-redux'
//import Authentication from "./authentication";
//import Register from "./register";
import { submitLogin } from '../actions/authActions';
import { Form} from "react-bootstrap";

class Login extends Component {

    constructor() {
        // eslint-disable-next-line no-undef
        super(props);
        this.updateDetails = this.updateDetails.bind(this);
        this.login = this.login.bind(this);

        this.state = {
            details:{
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

    login() {
        const {dispatch} = this.props;
        dispatch(submitLogin(this.state.details));
    }

    render(){
        return  (
            <Form className='form-horizontal'>
                <Form.Group controlId='username'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={this.updateDetails} value={this.state.details.username} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>password</Form.Label>
                    <Form.Control onChange={this.updateDetails} value={this.state.details.password} type="password" placeholder="password" />
                </Form.Group>
                <button onClick={this.login}>Sign in</button>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(Login);