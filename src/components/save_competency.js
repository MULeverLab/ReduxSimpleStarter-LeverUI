import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {renderField} from "../functions/render_field";
import {validate} from "../functions/render_field"


import {connect} from 'react-redux';
import {saveFunction} from "../actions";

class CompentencySave extends Component {

    onSubmit(values){
        const type = "project/competency";
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
                    label="Competency Name"
                    name ="name"
                    component={renderField}
                />
                <Field
                    label="Description"
                    name="description"
                    component={renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        );
    }
}


export default reduxForm({
    validate,
    form: 'SaveCompetencyForm'
})(
    connect(null,{saveFunction})(CompentencySave)
)