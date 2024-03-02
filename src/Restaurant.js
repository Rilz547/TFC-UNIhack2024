import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Restaurant.scss';
import Button from './components/Button';

function StarRating({ rating, onRate }) {
    const handleClick = (value) => {
        onRate(value);
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((value) => (
                <span
                    key={value}
                    onClick={() => handleClick(value)}
                    style={{
                        cursor: 'pointer',
                        color: value <= rating ? 'gold' : 'gray',
                        fontSize: '24px',
                        marginRight: '4px',
                    }}
                >
                    &#9733;
                </span>
            ))}
            <p>You rated this {rating} out of 5 stars</p>
        </div>
    );
}

function Restaurant(props) {
    const { restObj } = props;

    const [addReview, setAddReview] = useState(false);
    const [userRating, setUserRating] = useState(0);
    const [reviews, setReviews] = useState([]);

    const [open, setOpen] = useState(false);

    const handleRate = (rating) => {
        setUserRating(rating);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewTitle = e.target.elements.title.value;
        const reviewerName = e.target.elements.name.value;

        const newReview = {
            title: reviewTitle,
            name: reviewerName,
            rating: userRating,
        };

        setReviews([...reviews, newReview]);
        setUserRating(0);

        e.target.reset();
    };

    return (
        <>
            <div style={{ padding: '48px' }}>
                <div>
                    <h2>Reviews</h2>
                    {reviews.map((review, index) => (
                        <div key={index}>
                            <h3>{review.title}</h3>
                            <p>By: {review.name}</p>
                            <p>Rating: {review.rating}</p>
                            <p>{review.review}</p>
                        </div>
                    ))}
                </div>
                <div className="header">
                    <div className="icon">
                        <img
                            src={restObj?.logo && restObj?.logo}
                            width="200px"
                            alt=""
                        />
                    </div>
                    <div className="heading">
                        {restObj?.heading}
                        <div
                            style={{
                                fontSize: '16px',
                                fontWeight: 'lighter',
                                fontStyle: 'italic',
                                color: 'grey',
                                marginTop: '12px',
                            }}
                        >
                            Mexican Cuisine
                        </div>
                    </div>
                </div>
                {/* <StarRating stars={3.6} /> */}
            </div>
            <Button
                buttonText="Opening Hours"
                onClick={() => setOpen(true)}
                height="20px"
            />
            <Button
                buttonText="Opening Hours"
                onClick={() => setAddReview(true)}
                height="20px"
            />
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
            <Dialog
                open={addReview}
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
                    style={{ fontSize: '24px', fontStyle: 'italic' }}
                >
                    Add a Review
                </DialogTitle>
                <DialogContent>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name">Your Name: </label>
                                <input type="text" id="name" name="name" />
                            </div>
                            <div>
                                <label htmlFor="title">Review Title: </label>
                                <input type="text" id="title" name="title" />
                            </div>
                            <div>
                                <textarea
                                    style={{ resize: 'none' }}
                                    id="review"
                                    name="review"
                                    placeholder="Write a review!"
                                    rows="6"
                                    cols="50"
                                />
                            </div>
                            <StarRating
                                rating={userRating}
                                onRate={handleRate}
                            />
                            <button type="submit">Submit Review</button>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Restaurant;
