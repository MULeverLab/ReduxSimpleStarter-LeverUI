import React, {Component} from 'react';
import _ from 'lodash';

//Import connect helper
import {connect} from 'react-redux';

//Import the action creator
import {fetch} from "../actions"

class GetUsers extends Component {

    //Check to see if the component mounted and go fetch the data
    componentDidMount(){
        this.props.fetch("project/account");
    }

    render (){
        console.log(this.props.users);
        return (
            <div>HelloWorld</div>

        );

    }

}

//mapStateToProps allows access to our application level state and sets it to props
function mapStateToProps(state){
    return {users: state.fetchData }
}
//wire action creator
export default connect(mapStateToProps, {fetch})(GetUsers);