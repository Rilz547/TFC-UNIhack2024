import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Button from './components/Button';

const AddReview = (props) => {
    const { handleSubmit, setAddReview, open } = props;

    const [review, setReview] = useState({
        title: '',
        name: '',
        description: '',
        price: 3,
        quality: 3,
        service: 3,
    });

    const handleSliderChange = (field, value) => {
        setReview({ ...review, [field]: value });
    };

    const handleReviewSubmission = (value) => {
        setAddReview(false);
        handleSubmit(value);
    };

    return (
        <Dialog
            open={open}
            onClose={() => setAddReview(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
                sx: {
                    borderRadius: '25px',
                },
            }}
        >
            <DialogTitle id="alert-dialog-title" style={{ fontSize: '24px' }}>
                Add a Review
            </DialogTitle>
            <DialogContent>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <div>
                        <TextField
                            id="outlined-basic"
                            label="User Name"
                            variant="outlined"
                            style={{ marginTop: '8px' }}
                            value={review.name}
                            onChange={(e) =>
                                setReview({
                                    ...review,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-basic"
                            label="Review Title"
                            variant="outlined"
                            style={{ marginTop: '8px' }}
                            value={review.title}
                            onChange={(e) =>
                                setReview({
                                    ...review,
                                    title: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <TextField
                    id="outlined-basic"
                    label="Review Description"
                    variant="outlined"
                    style={{
                        marginTop: '12px',
                        width: '100%',
                        marginBottom: '16px',
                    }}
                    value={review.description}
                    onChange={(e) =>
                        setReview({
                            ...review,
                            description: e.target.value,
                        })
                    }
                />
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '15% 80%',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <div>Price:</div>
                    <Slider
                        value={review.price}
                        onChange={(e, value) =>
                            handleSliderChange('price', value)
                        }
                        step={1}
                        marks
                        min={1}
                        max={5}
                        valueLabelDisplay="auto"
                    />
                    <div>Quality:</div>
                    <Slider
                        value={review.quality}
                        onChange={(e, value) =>
                            handleSliderChange('quality', value)
                        }
                        step={1}
                        marks
                        min={1}
                        max={5}
                        valueLabelDisplay="auto"
                    />
                    <div>Service:</div>
                    <Slider
                        value={review.service}
                        onChange={(e, value) =>
                            handleSliderChange('service', value)
                        }
                        step={1}
                        marks
                        min={1}
                        max={5}
                        valueLabelDisplay="auto"
                    />
                </div>
                {/* <button type="submit" onClick={() => handleSubmit(review)}>
                    Submit Review
                </button> */}
                <Button
                    titleContent={
                        <div style={{ display: 'inline-flex' }}>
                            <i
                                className="fa-solid fa-floppy-disk"
                                style={{ fontSize: '18px', color: 'white' }}
                            ></i>
                            <div
                                style={{
                                    marginLeft: '12px',
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}
                            >
                                Save
                            </div>
                        </div>
                    }
                    onClick={(e) => handleReviewSubmission(e)}
                    height="18px"
                    width="80px"
                    colour="#4cbb17"
                />
            </DialogContent>
        </Dialog>
    );
};

export default AddReview;
