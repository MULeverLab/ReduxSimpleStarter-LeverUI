import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {renderField} from "../functions/render_field";
import {validate} from "../functions/render_field"


import {connect} from 'react-redux';
import {saveFunction} from "../actions";

class ProjectSave extends Component {

    onSubmit(values){
        const type = "project/project";
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
                    label="Nomenclature"
                    name ="name"
                    component={renderField}
                />
                <Field
                    label="Description"
                    name="description"
                    component={renderField}
                />
                <Field
                    label="Start Date"
                    name="startDate"
                    component={renderField}
                />
                <Field
                    label="End Date"
                    name="endDate"
                    component={renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        );
    }
}


export default reduxForm({
    validate,
    form: 'SavePhenotypeForm'
})(
    connect(null,{saveFunction})(ProjectSave)
)