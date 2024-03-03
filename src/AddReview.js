import React, { useEffect, useState, useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Button from './components/Button';
import IconButton from '@mui/material/IconButton';
import { format } from 'date-fns';
import Fade from '@mui/material/Fade';

const AddReview = (props) => {
    const { handleSubmit, setAddReview, open } = props;
    const fileInputRef = useRef(null);

    const [review, setReview] = useState({
        title: null,
        name: null,
        description: null,
        time: '',
        price: 3,
        quality: 3,
        service: 3,
        image: null, // Add image state
    });

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(
            review?.title === null ||
                review?.name === null ||
                review?.description === null
        );
    }, [review]);

    useEffect(() => {
        if (!open) {
            // Reset review state when the dialog is closed
            setReview({
                title: null,
                name: null,
                description: null,
                price: 3,
                quality: 3,
                service: 3,
                image: null, // Reset image state
                time: format(new Date(), 'dd/MM/yyyy'),
            });
        }
    }, [open]);

    const handleSliderChange = (field, value) => {
        setReview({ ...review, [field]: value });
    };

    const handleReviewSubmission = (value) => {
        console.log(review);
        setAddReview(false);
        handleSubmit(value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setReview({ ...review, image: reader.result });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
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
            <DialogTitle
                id="alert-dialog-title"
                style={{ fontSize: '24px', fontWeight: 'bold' }}
            >
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

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
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
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: '16px',
                    }}
                >
                    {/* <IconButton onClick={() => fileInputRef.current.click()}>
                        <i class="fa-solid fa-camera"></i>
                    </IconButton> */}

                    <Button
                        titleContent={
                            <div style={{ display: 'inline-flex' }}>
                                <i
                                    className="fa-solid fa-camera"
                                    style={{ fontSize: '18px', color: 'white' }}
                                ></i>
                                <div
                                    style={{
                                        marginLeft: '12px',
                                        fontWeight: 'bold',
                                        color: 'white',
                                    }}
                                >
                                    Upload Image
                                </div>
                            </div>
                        }
                        onClick={() => fileInputRef.current.click()}
                        height="18px"
                        width="130px"
                        colour="#4cbb17"
                    />

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
                        onClick={() => handleReviewSubmission(review)}
                        height="18px"
                        width="60px"
                        colour="#4cbb17"
                        disabled={disabled}
                    />
                </div>
                <Fade in={review?.image} style={{ transitionDelay: '200ms' }}>
                    <div>
                        {review?.image && (
                            <img
                                src={review?.image}
                                alt=""
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    marginBottom: '16px',
                                    marginTop: '24px',
                                    marginLeft: '110px',
                                    objectFit: 'cover',
                                    borderRadius: '10px',
                                }}
                            />
                        )}
                    </div>
                </Fade>
            </DialogContent>
        </Dialog>
    );
};

export default AddReview;
