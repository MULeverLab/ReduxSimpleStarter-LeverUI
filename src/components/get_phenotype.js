import React, {Component} from 'react';
import _ from 'lodash';
import ReactTable from 'react-table'
import {connect} from 'react-redux';
import {fetch} from "../actions";

class GetPhenotype extends Component {

    componentDidMount(){
        console.log("fetch");
        this.props.fetch("animal/phenotype");
    }

    render() {

        console.log(this.props.phenotype);
        var arr = _.values(this.props.phenotype);
        const columns =[{
            Header: 'Name',
            accessor: 'name'
        }, {
            Header: 'Description',
            accessor: 'description'
        }]
        console.log(arr);

        return (
            <div>
                <ReactTable
                    data={arr}
                    columns ={[
                        {
                           Header: "Phenotype",
                            columns: [
                                {Header: "Name",
                                accessor: "name"
                                },
                                {
                                    Header: "Description",
                                    accessor: "description"
                                }
                            ]
                        }

                    ]}
                />

            </div>

        );
    }
}

function mapStateToProps(state){
    return{phenotype: state.fetchData}
}

export default connect(mapStateToProps, {fetch})(GetPhenotype);

