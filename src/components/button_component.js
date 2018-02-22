import React from 'react';
import {Link} from 'react-router-dom';


export default function addButton(path, title){
    return (<div>
                <Link to={`${path}`}>{title}</Link>
            </div>);
}