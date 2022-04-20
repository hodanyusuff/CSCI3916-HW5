import React, {Component} from 'react';
import { connect } from 'react-redux'
import Authentication from "./authentication";
import Register from "./register";
import { submitRegister } from '../actions/authActions';
import {ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";

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
            <Form horizontal>
                <FormGroup controlId='name'>
                    <col componentClass={ControlLabel} sm={2}>
                        Name
                    </col>
                    <col sm={10}>
                      <FormControl onChange={this.updateDetails} value={this.state.details.name} type="text" placeholder="Name" />
                    </col>
                </FormGroup>

                <FormGroup controlId="username">
                    <col componentClass={ControlLabel} sm={2}>
                        Email
                    </col>
                    <col sm={10}>

                         <FormControl onChange={this.updateDetails} value={this.state.details.username} type="text" placeholder="Username" />
                    </col>
                </FormGroup>

                <FormGroup controlId="password">
                    <col componentClass={ControlLabel} sm={2}>
                        Password
                    </col>
                    <col sm={10}>

                        <FormControl onChange={this.updateDetails} value={this.state.details.password} type="password" placeholder="Password" />
                    </col>
                </FormGroup>
                <button onClick={this.register}>Register</button>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(Register);