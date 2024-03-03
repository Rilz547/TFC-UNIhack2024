import './Details.scss';
import Button from './components/Button';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Details = (props) => {
    const { content, id } = props;
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="details-container">
                <div
                    style={{
                        display: 'flex',
                        gap: '16px',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >
                    <Button
                        titleContent={
                            <div style={{ display: 'inline-flex' }}>
                                <i
                                    className="fa-solid fa-location-dot"
                                    style={{
                                        fontSize: '18px',
                                        color: 'red',
                                    }}
                                ></i>
                                <div
                                    style={{
                                        marginLeft: '12px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Direct Me
                                </div>
                            </div>
                        }
                        onClick={() => {
                            id === 0 &&
                                window.open(
                                    'https://maps.app.goo.gl/2kfcUb3VRWn6vbEFA',
                                    '_blank'
                                );
                        }}
                        height="18px"
                        width="100px"
                        colour=""
                    />

                    <Button
                        titleContent={
                            <div style={{ display: 'inline-flex' }}>
                                <i
                                    className="fa-solid fa-clock"
                                    style={{ fontSize: '18px' }}
                                ></i>
                                <div
                                    style={{
                                        marginLeft: '12px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Hours
                                </div>
                            </div>
                        }
                        onClick={() => setOpen(true)}
                        height="18px"
                        width="80px"
                    />

                    <Button
                        titleContent={
                            <div style={{ display: 'inline-flex' }}>
                                <i
                                    className="fa-solid fa-link"
                                    style={{ fontSize: '18px' }}
                                ></i>
                                <div
                                    style={{
                                        marginLeft: '12px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Website
                                </div>
                            </div>
                        }
                        onClick={() => window.open(content?.website, '_blank')}
                        height="18px"
                        width="90px"
                        colour="lightgrey"
                    />

                    <Button
                        titleContent={
                            <div style={{ display: 'inline-flex' }}>
                                <i
                                    className="fa-solid fa-burger"
                                    style={{ fontSize: '18px' }}
                                ></i>
                                <div
                                    style={{
                                        marginLeft: '12px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Menu
                                </div>
                            </div>
                        }
                        onClick={() => {
                            id === 0 &&
                                window.open(
                                    'https://www.guzmanygomez.com.au/our-food/',
                                    '_blank'
                                );
                        }}
                        height="18px"
                        width="90px"
                        colour="salmon"
                    />
                </div>
            </div>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
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
                    style={{ fontSize: '24px', fontStyle: 'italic' }}
                >
                    Operating Hours
                    <div className="opening-hours">
                        <div>Monday</div>
                        <div>10am - 5pm</div>
                        <div>Tuesday</div>
                        <div>10am - 5pm</div>
                        <div>Wednesday</div>
                        <div>10am - 5pm</div>
                        <div>Thursday</div>
                        <div>10am - 5pm</div>
                        <div>Friday</div>
                        <div>10am - 5pm</div>
                        <div>Saturday</div>
                        <div>10am - 5pm</div>
                        <div>Sunday</div>
                        <div>10am - 5pm</div>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description"></DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Details;
