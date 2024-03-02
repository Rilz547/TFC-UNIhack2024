import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './RoundedContainer.scss';

function Component(props) {
    const { heading, content, logo, description, style, route } = props;
    const [open, setOpen] = React.useState(false);
    const location = useLocation();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const isDashboardRoute = location.pathname === '/restaurant';

    return (
        <>
            {isDashboardRoute ? (
                <div
                    className="container-wrapper"
                    style={style}
                    onClick={handleClickOpen}
                >
                    <div>
                        {logo && <img src={logo} alt="" className="logo" />}
                    </div>
                    <div>
                        <div className="heading">{heading && heading}</div>
                        <div className="content">{content && content}</div>
                    </div>
                </div>
            ) : (
                <Link to={route} style={{ textDecoration: 'none' }}>
                    <div className="container-wrapper" style={style}>
                        <div>
                            {logo && <img src={logo} alt="" className="logo" />}
                        </div>
                        <div>
                            <div className="heading">{heading && heading}</div>
                            <div className="content">{content && content}</div>
                        </div>
                    </div>
                </Link>
            )}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    sx: {
                        borderRadius: '25px',
                    },
                }}
            >
                <DialogTitle
                    id="alert-dialog-title"
                    style={{ fontSize: '42px' }}
                >
                    {heading}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {description ? description : ''}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Component;
