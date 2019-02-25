import React from 'react';
import { Link } from 'react-router-dom'

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type) {
        return (e) => {
            this.setState( { [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign( {}, this.state);
        this.props.processForm(user);
    }

    render() {
        let header;
        let otherRoute;
        let otherHeader;
        let email;
        let errors = this.props.errors.map( error => 
            <li key={error}> {error} </li> 
            )
        if (this.props.formType === 'login') {
            header = "Log In";
            otherRoute = "/signup"
            otherHeader = "Sign Up"
            email = "";
        } else {
            header = "Sign Up";
            otherRoute = "/login"
            otherHeader = "Log In"
            email = (
                <label> Email:
                <input 
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                />
            </label>
            )
        }



        return (
            <div>
                <Link to={otherRoute}>{otherHeader} instead</Link>
                <ul>
                {errors}
                </ul>
                <h3>{header}</h3>
                <form>
                    <label> Username:
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange('username')}
                        />
                    </label>
                    <label> Password:
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                        />
                    </label>
                    {email}
                    <button onClick={this.handleSubmit}>{header}</button>
                </form>
            </div>
        )
    }
};

