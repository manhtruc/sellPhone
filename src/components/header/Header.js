import { Badge, Container, Grid, withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppleIcon from '@material-ui/icons/Apple';
import HeadsetIcon from '@material-ui/icons/Headset';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import WatchIcon from '@material-ui/icons/Watch';
import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { loginFailed } from '../../actions/loginAction';
import styles from './header-styles';

const sideBar = [
    {
        name: 'Điện Thoại Apple',
        link: '/phoneapple'
    },
    {
        name: 'Điện Thoại Samsung',
        link: '/phonesamsung'
    },
    {
        name: 'Phụ Kiện',
        link: '/accessary'
    },
    {
        name: 'Smart Watch',
        link: '/smartwatch'
    },

]

const Header = ({ classes, listProduct, loginFailed }) => {

    // handle logout
    const handleLoginFailed = () => {
        loginFailed()
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Link className='nav-link' to='/'>Qoobee Shop</Link>
                        </Typography>
                        <NavLink className={classes.navLink} to='/home'>
                            Trang Chủ
                    </NavLink>

                        <NavLink className={classes.navLink} to='/cart'>
                            Giỏ Hàng
                    </NavLink>
                        <Badge badgeContent={listProduct.length} color="secondary">
                            <ShoppingCartIcon color='action' />
                        </Badge>
                        <NavLink onClick={handleLoginFailed} className={classes.navLink} to='/login'>
                            Thoát
                    </NavLink>
                    </Toolbar>
                </Container>
            </AppBar>
            <AppBar color="transparent" position="static" className={classes.wrapSubMenu}>
                <Container>
                    <Grid className={classes.subMenu}>
                        {sideBar.map((text, index) => (
                            <ListItem button key={index}>
                                <NavLink className={classes.navLinkSidebar} to={text.link}>
                                    <ListItemIcon>{index === 0 ? <AppleIcon /> : index === 1 ? <PhoneAndroidIcon /> : index === 2 ? <HeadsetIcon /> : <WatchIcon />}</ListItemIcon>
                                    <ListItemText primary={text.name} />
                                </NavLink>
                            </ListItem>
                        ))}
                    </Grid>
                </Container>
            </AppBar>
        </div >
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        listProduct: state.product.listProductToCart
    }
}

export default withStyles(styles)(connect(mapStateToProps, { loginFailed })(Header));