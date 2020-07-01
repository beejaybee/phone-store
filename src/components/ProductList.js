import React, { Component } from 'react';
import Title from './TItle';
import { ProvideConsumer } from '../context';
import Product from './Product';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                        <Title name='Our' title='products' />
                        <div className='row'>
                            <ProvideConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product  key={product.id} product={product} />
                                    })
                                }}
                            </ProvideConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>  
            
            //  <Product />
            
        )
    }
}
