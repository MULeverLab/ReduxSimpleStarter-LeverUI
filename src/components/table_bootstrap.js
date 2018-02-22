import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

class RenderTable extends Component {


    render (){
        const products = [{id:"1", name:"Doe", price:"46"}];
        const columns = [{
            dataField: 'id',
            text: 'Product ID'
        }, {
            dataField: 'name',
            text: 'Product Name'
        }, {
            dataField: 'price',
            text: 'Product Price'
        }];


        return (
            <div>
                <BootstrapTable keyField='id' data={ products } columns={ columns } />
            </div>

        );

    }

}

export default RenderTable;




