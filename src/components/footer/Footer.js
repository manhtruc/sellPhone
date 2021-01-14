import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Box, Container, Typography, withStyles } from '@material-ui/core';
import styles from './footer-styles';

const Footer = ({ classes }) => {
    return (
        <div className={classes.footer}>
            <Box className={classes.bottom}>
                <Container maxWidth='md'>
                    <BottomNavigation>
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                    <Typography className={classes.text}>
                        © 2020 Copyright: NguyenMT.com
                    </Typography>
                </Container>
            </Box>
        </div>
    );
};

export default withStyles(styles)(Footer);