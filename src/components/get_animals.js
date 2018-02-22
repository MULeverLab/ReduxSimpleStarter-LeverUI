import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetch} from "../actions";

class GetAnimals extends Component {

    componentDidMount(){
        this.props.fetch("animal/animal");
    }

    renderAnimals(){
        return _.map(this.props.animals, animal=>{
            return (
                <tbody key={animal.id}>
                    <tr>
                    <td>{animal.id}</td>
                    <td>{animal.speciesId}</td>
                    <td>{animal.causeOfDeath}</td>
                    <td>{animal.genotype.name}</td>
                    </tr>
                </tbody>
            )


        });
    }

    render(){
        console.log(this.props.animals);
        return (
        <div>
            <table> {this.renderAnimals()}</table>
        </div>
        );
    }
}
function mapStateToProps(state){
    return{animals: state.fetchData}
}

export default connect(mapStateToProps, {fetch})(GetAnimals);