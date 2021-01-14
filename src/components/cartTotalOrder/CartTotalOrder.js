import { Grid, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import styles from './cartTotal-styles';


const CartTotalOrder = ({ classes, valuePriceAndQty }) => {

    return (
        <Grid className={classes.gridItem} item xs={12}>
            <Typography className={classes.textWhite}>
                ----------------------------------
            </Typography>
            <Typography className={classes.textBold} color='secondary'>
                Tổng Tiền: {valuePriceAndQty[0]}$
            </Typography>
            <Typography className={classes.textBold} color='secondary'>
                Tổng Số Lượng: {valuePriceAndQty[1]}
            </Typography>
            <Typography className={classes.textWhite}>
                ---------------
            </Typography>
        </Grid>
    );
};

export default withStyles(styles)(CartTotalOrder);