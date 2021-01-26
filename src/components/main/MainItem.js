import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { default as React } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './main-styles';
import './main.css'


const MainItem = ({ product, classes, ChangeToSlug, indexActive }) => {

    const connectChangeToSlug = (code) => {
        ChangeToSlug(code)
    }
    return (
        <Grid item xs={12} sm={6} className={"main-item " + (indexActive ? 'active' : " ")}>
            <Card >

                <NavLink to={`/${connectChangeToSlug(product.code)}.${product.id}.html`}>
                    <img className={classes.img} alt='img' src={product.image} />
                </NavLink>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <NavLink className={classes.navLink} to={`/${connectChangeToSlug(product.code)}.${product.id}.html`}>
                            {product.code}
                        </NavLink>
                    </Typography>
                    <Typography>
                        {product.price} $
                                        </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default withStyles(styles)(MainItem);