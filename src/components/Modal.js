import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProvideConsumer } from '../context';
import { ButtonContainer } from './StyledComponents';
import { ModalContainer } from './StyledComponents';

class Modal extends Component {
    render() {
        return (
            <ProvideConsumer>
                {value => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className='row'>
                                        <div id="modal" className='col-8 col-md-6 col col-lg-4 mx-auto text-center text-capitalize py-5'>
                                            <h5> item added to the cart </h5>
                                            <img src={img} className="img-fluid" alt="product" />
                                            <h5> {title} </h5>
                                            <h5 className='text-muted'> price: $ {price}</h5>
                                            <Link to='/'>
                                                <ButtonContainer className="m-2" onClick={() => closeModal()}>
                                                    go to store
                                                </ButtonContainer>
                                            </Link>
                                            <Link to='/cart'>
                                                <ButtonContainer cart onClick={() => closeModal()}>
                                                    go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                    
                }}
            </ProvideConsumer>

        )
    }
}

export default Modal 