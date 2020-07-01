import React, { Component } from 'react';
import { ProvideConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './StyledComponents';

export default class Details extends Component {
    render() {
        return (
            <ProvideConsumer>
                {value => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;

                    return (
                        <div className = 'container py-5'>
                            <div className='row'>
                                {/* Title */}
                                <div className='col-10 mx-auto text-center text-slanted text-blue'>
                                    <h1> {title} </h1>
                                </div>
                                {/*End of Title */}
                            </div>    
                                {/* Product info */}
                                <div className='row'>
                                    <div className='col-10 mx-auto col-md-6 my-3'>
                                        <img src={img} className='img-fluid' alt='product' />
                                    </div>

                                    <div className='col-10 col-md-6 my-3 text-captalize'>
                                        <h2>model : {title} </h2>
                                        <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                            made by : <span className='text-uppercase'>{company}</span>
                                        </h4>
                                        <h4 className='text-blue'>
                                            <strong>
                                                Price : <span>$</span>{price}
                                            </strong>
                                        </h4>
                                        <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                            Some info about then product :
                                        </p>
                                        <p className='text-muted lead'> {info} </p>
                                        {/*buttons */}
                                        <div>
                                            <Link to='/'>
                                                <ButtonContainer className='mr-2'>
                                                    back to products
                                                </ButtonContainer>
                                            </Link>

                                            <ButtonContainer 
                                            cart
                                            disabled={inCart ? true : false }
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }
                                            }
                                            >
                                                {inCart ? 'inCart': 'Add to Cart'}
                                            </ButtonContainer>
                                        </div>
                                    </div>
                                </div>
                                {/* End of Product info */}
                            
                        </div>
                    );
                }}
            </ProvideConsumer>
        )
    }
}
