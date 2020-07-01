import React, { Component } from 'react'
import Title from '../TItle';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProvideConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProvideConsumer>
                {value => {
                    const {cart} = value;
                    if (cart.length === 0) {
                        return (
                            <EmptyCart />
                        )
                    } else {
                        return (
                            <>
                            <Title name='your' title='cart' />
                            <CartColumns />
                            <CartList value={value} />
                            <CartTotals  value={value}/>
                            </>
                        )
                    } 
                }}
                </ProvideConsumer>
                
                
            </section>
        )
    }
}
