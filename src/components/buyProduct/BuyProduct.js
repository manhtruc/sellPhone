import { Button, Grid, Modal, Paper, TextField, Typography, withStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import React from 'react';
import styles from './butProduct-styles';
import { toast } from 'react-toastify';



const BuyProduct = ({ classes, valuePriceAndQty, handleCloseTheOrder, productCart }) => {
    const [open, setOpen] = React.useState(false);

    // submit close the order 
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseBuy = () => {
        handleClose()
        for (let product in productCart) {
            toast.success(`Bạn đã mua thành công điện thoại ${productCart[product].code}`)
        }
    }

    const body = () => {

        return (<div className={classes.paper}>
            <h2 id="simple-modal-title">Thông tin khách hàng</h2>
            <form noValidate>
                <Paper style={{ padding: 16 }}>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                required
                                name="firstName"
                                type="text"
                                label="Họ"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                required
                                name="lastName"
                                type="text"
                                label="Tên"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                fullWidth
                                required
                                type="email"
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                fullWidth
                                required
                                type="email"
                                label="Số Điện Thoại"
                            />
                        </Grid>
                        <Grid className={classes.text} item xs={12}>
                            <Typography className={classes.textBold} color='secondary'>
                                Tổng Tiền: {valuePriceAndQty[0]}$
                            </Typography>
                        </Grid>
                        <Grid className={classes.text} item xs={12}>
                            <Typography className={classes.textBold} color='secondary'>
                                Tổng Số Lượng: {valuePriceAndQty[1]}
                            </Typography>
                        </Grid>
                        <Button onClick={handleCloseBuy} variant='outlined' color='secondary'>OK</Button>
                    </Grid>
                </Paper>
            </form>
            <Divider />
        </div>)
    };

    return (
        <Grid className={classes.button} container spacing={3} justify='flex-end' >
            <Button className={classes.marginRight} variant='outlined' color='primary' onClick={handleOpen}>Mua Ngay</Button>
            <Button variant='outlined' color='secondary' onClick={handleOpen}>Mua Trả Góp</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body()}
            </Modal>
        </Grid>
    );
};

export default withStyles(styles)(BuyProduct);