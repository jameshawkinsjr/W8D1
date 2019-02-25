import React from 'react';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    };

    handleChange() {

    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {


        return (
            <div>

            </div>
        )
    }
};