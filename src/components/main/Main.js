import { Container, withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart, fetchListProduct, initProductInCart } from '../../actions/productAction';
import styles from './main-styles';


const Main = ({ classes, fetchListProduct, listProduct, addToCart, initProductInCart }) => {

    useEffect(() => {
        fetchListProduct()
        initProductInCart()
    }, [])

    const ChangeToSlug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }

    // const handleAddToCart = (product) => {
    //     addToCart(product.id)
    // }

    return (
        <div className={classes.rootCard}>
            <Container>
                <Grid container spacing={3}>
                    {listProduct.map((product, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <Card >
                                <CardActionArea>
                                    <NavLink to={`/${ChangeToSlug(product.code)}.${product.id}.html`}>
                                        <img className={classes.img} alt='img' src={product.image} />
                                    </NavLink>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <NavLink className={classes.navLink} to={`/${ChangeToSlug(product.code)}.${product.id}.html`}>
                                                {product.code}
                                            </NavLink>
                                        </Typography>
                                        <Typography>
                                            {product.price} $
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                {/* <CardActions>
                                    <Button size="small" variant='outlined' color="primary">
                                        Mua
                                    </Button>
                                    <Button onClick={() => handleAddToCart(product)} size="small" variant='outlined' color="primary">
                                        Thêm vào giỏ hàng
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        listProduct: state.product.listProduct
    }
}
export default withStyles(styles)(connect(mapStateToProps, { fetchListProduct, addToCart, initProductInCart })(Main));