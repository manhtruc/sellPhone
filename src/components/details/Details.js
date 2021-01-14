import { Button, Container, withStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart } from '../../actions/productAction';
import styles from './details-styles';


const Details = ({ classes, match, listProduct, addToCart }) => {

    const handleAddToCart = (product) => {
        addToCart(product.id)
    }

    return (
        <div>
            <Container maxWidth='md'>

                {listProduct.filter(item => item.id === parseInt(match.params.id)).map((product, index) => (
                    <Card key={index} className={classes.root}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    QS
                            </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Iphone"
                            subheader="September 14, 2020"
                        />
                        <img className={classes.img} alt='img-card' src={product.image} />
                        <CardContent>
                            <Typography variant="h4" component="p">
                                {product.code}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <NavLink className={classes.toBuy} to='/cart'>
                                <Button onClick={() => handleAddToCart(product)} variant='outlined' color='secondary'>Đặt Mua</Button>
                            </NavLink>
                            <Button onClick={() => handleAddToCart(product)} variant='outlined' color='primary'>Thêm Vào Giỏ Hàng</Button>
                        </CardActions>
                        <CardContent>
                            <Typography paragraph>{product.detail}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Container>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        listProduct: state.product.listProduct
    }
}

export default withStyles(styles)(connect(mapStateToProps, { addToCart })(Details));
