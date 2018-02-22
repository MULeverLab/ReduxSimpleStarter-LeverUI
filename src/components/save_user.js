import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {validate, renderField} from "../functions/render_field";



import {connect} from 'react-redux';
import {saveFunction} from "../actions";

class UserSave extends Component {

    onSubmit(values){
        const type = "project/account";
        this.props.saveFunction(values, type, ()=> {
            this.props.history.push('/')
        });
        console.log(values);
    }

    render(){
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Username"
                    name ="username"
                    component={renderField}
                />
                <Field
                    label="Password"
                    name ="password"
                    component={renderField}
                />
                <Field
                    label="First Name"
                    name ="firstName"
                    component={renderField}
                />
                <Field
                    label="Last Name"
                    name="lastName"
                    component={renderField}
                />
                <Field
                    label="Email"
                    name="email"
                    component={renderField}
                />
                <Field
                    label="Phone Number"
                    name="phoneNumber"
                    component={renderField}
                />
                <Field
                    label="Competency"
                    name="competency"
                    component={renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        );
    }
}


export default reduxForm({
    validate,
    form: 'SaveUserForm'
})(
    connect(null,{saveFunction})(UserSave)
)