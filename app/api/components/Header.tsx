'use client'
import { AppBar, Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <div className="Header">
                <Typography variant='h2'>Wiki Viewer
                </Typography>
            </div>
        </AppBar>
    );
};

export default Header;