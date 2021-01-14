import { Box, Button, Grid, Typography, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React from 'react';
import styles from './cartItem-styles';


const CartItem = ({ productCart, classes, handleCountQty, handleDeleteProduct }) => {
    // const getDetailProduct = (id) => (
    //     listProduct.find(product => product.id === id)
    // )

    // const formatProductData = ({ id, qty }) => ({
    //     qty,
    //     ...getDetailProduct(id)
    // });
    const renderProductCart = () => {
        // const listProductCart = listProductToCart.map(item => formatProductData(item));

        return productCart.map(product => (
            <Grid key={product.id} className={classes.gridItem} item xs={12} >
                <Box>
                    <img alt='Iphone' src={product.image} />
                    <Typography className={classes.textBold} align='center'  >
                        {product.code}
                    </Typography>
                </Box>
                <Typography>
                    Giá: {product.qty * product.price}$
                </Typography>
                <Typography>
                    <Button onClick={() => handleUpdateQty(product.id, product.qty - 1)} ><RemoveIcon /></Button>
                    Số Lượng: {product.qty}
                    <Button onClick={() => handleUpdateQty(product.id, product.qty + 1)} ><AddIcon /></Button>
                </Typography>
                <Button onClick={() => handleDeleteOrder(product.id)} variant='outlined' color="secondary">Xóa</Button>
            </Grid>
        ))
    }

    const handleUpdateQty = (id, qty) => {
        handleCountQty(id, qty)
    }

    const handleDeleteOrder = (id) => {
        handleDeleteProduct(id)
    }


    return (
        <Grid>
            { renderProductCart()}
        </Grid>
    );
};

export default withStyles(styles)(CartItem);