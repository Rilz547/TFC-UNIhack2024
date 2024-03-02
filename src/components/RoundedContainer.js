import React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import './RoundedContainer.scss';

function Component(props) {
    const { heading, content, logo, description, style } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div
                className="container-wrapper"
                style={style}
                onClick={handleClickOpen}
            >
                <div>
                    {logo && (
                        <>
                            <img src={logo} alt="" className="logo" />
                        </>
                    )}
                </div>
                <div>
                    <div className="heading">{heading && heading}</div>
                    <div className="content">{content && content}</div>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    sx: {
                        borderRadius: '25px',
                        // width: `${window.screen}px`,
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
                {/* <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions> */}
            </Dialog>
        </>
    );
}

export default Component;
