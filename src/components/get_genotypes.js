import React, {Component} from 'react';
import {fetch} from "../actions";
import {connect} from 'react-redux';

class GetGenotypes extends Component {
    componentDidMount(){
        this.props.fetch("animal/genotype");
    }

    render (){
        console.log(this.props.genotypes);
        return (
            <div>HelloWorldGenotype</div>
        );
    }
}

function mapStateToProps(state){
    return {genotypes: state.fetchData }
}


export default connect(mapStateToProps, {fetch})(GetGenotypes);