import React from 'react';

export function renderField(field){
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
    return (
        <div className={className}>
            <label>{field.label}</label>
            <input
                className="form-control"
                type="text"
                {...field.input}
            />

            <div className= "text-help">
                {field.meta.touched ? field.meta.error : ''}
            </div>
        </div>

    );
}

export function validate(values){
    //OBJ - Values --> Contains all different values that user has entered
    //Create an errors object
    const errors ={};
    //Validate the inputs
    if (!values.name){
        errors.name ="Please enter a phenotype nomenclature";
    }
    if (!values.description){
        errors.description ="Please enter a description ";
    }
    if (!values.firstName){
        errors.firstName ="Please enter a valid first name";
    }
    if (!values.lastName){
        errors.lastName ="Please enter a valid last name";
    }
    if (!values.email){
        errors.email = "Please enter a valid email";
    }
    if (!values.phoneNumber){
        errors.phoneNumber ="Please enter a valid phone Number ";
    }
    if (!values.nameCompetency){
        errors.nameCompetency ="Please add title for competency";
    }
    return errors;
}