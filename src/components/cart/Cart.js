import { Container, Grid, withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { closeTheOrder, deleteProductInCart, updateQuantityProduct } from '../../actions/productAction';
import BuyProduct from '../buyProduct/BuyProduct';
import CartItem from '../cartItem/CartItem';
import CartTotalOrder from '../cartTotalOrder/CartTotalOrder';
import styles from './cart-styles';

const Cart = ({ classes, listProduct, listProductToCart, closeTheOrder, deleteProductInCart, updateQuantityProduct }) => {

    const [productCart, setProductCart] = useState([])

    useEffect(() => {
        const listProductCart = listProductToCart.map(item => {
            const result = listProduct.find(product => product.id === item.id)
            return {
                qty: item.qty,
                ...result
            }
        })

        setProductCart(listProductCart)
    }, [listProductToCart])


    // function value total price and qty 
    const returnPriceAndQuantity = () => {
        let sumPrice = 0
        let sumQuantity = 0
        for (let i = 0; i < productCart.length; i++) {
            sumPrice += productCart[i].price * productCart[i].qty
            sumQuantity += productCart[i].qty
        }
        return [sumPrice, sumQuantity]
    }
    const valuePriceAndQty = returnPriceAndQuantity()

    // reset list product in cart 
    const handleCloseTheOrder = () => {
        closeTheOrder()
    }

    // delete product 
    const handleDeleteProduct = (product) => {
        deleteProductInCart(product)
    }

    // update quantity 
    const handleCountQty = (id, qty) => {
        if (qty > 0) {
            updateQuantityProduct({ id, qty })
        } else {
            deleteProductInCart(id)
        }
    }

    return (
        <div className={classes.root}>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <CartItem
                        productCart={productCart}
                        handleCountQty={handleCountQty}
                        handleDeleteProduct={handleDeleteProduct}
                    />
                    {Object.keys(listProductToCart).length > 0 ? <CartTotalOrder valuePriceAndQty={valuePriceAndQty} /> : null}

                </Grid>
                {Object.keys(listProductToCart).length > 0 ?
                    <BuyProduct
                        valuePriceAndQty={valuePriceAndQty}
                        handleCloseTheOrder={handleCloseTheOrder}
                        productCart={productCart}
                    /> : null}

            </Container>
        </div >
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        listProduct: state.product.listProduct,
        listProductToCart: state.product.listProductToCart,
        idProduct: state.product.idProductActive
    }
}

export default withStyles(styles)(connect(mapStateToProps, { deleteProductInCart, updateQuantityProduct, closeTheOrder })(Cart));