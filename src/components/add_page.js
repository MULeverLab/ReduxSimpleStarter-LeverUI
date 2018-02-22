import React, {Component} from 'react';
import ButtonComponent from './button_component';

export default class AddPage extends Component {
    render(){
        return(
            <div>
            <ButtonComponent path="/colonies/get" title="colony"/>
            <ButtonComponent/>
            </div>
        );
    }
}