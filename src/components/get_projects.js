import React, {Component} from 'react';
import _ from 'lodash';

//Import connect helper
import {connect} from 'react-redux';

//Import the action creator
import {fetch} from "../actions"

class GetProjects extends Component {

    //Check to see if the component mounted and go fetch the data
    componentDidMount(){
        this.props.fetch("project/project");
    }

    render (){
        console.log(this.props.projects);
        return (
            <div>HelloWorldProjects</div>

        );

    }

}

//mapStateToProps allows access to our application level state and sets it to props
function mapStateToProps(state){
    return {projects: state.fetchData }
}
//wire action creator
export default connect(mapStateToProps, {fetch})(GetProjects);