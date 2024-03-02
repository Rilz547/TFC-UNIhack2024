import React, { useState } from 'react';

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
                        marginRight: '4px'
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
    const [userRating, setUserRating] = useState(0);
    const [reviews, setReviews] = useState([]);

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
            rating: userRating
        };
    
        setReviews([...reviews, newReview]);
        setUserRating(0);

        e.target.reset();
    };

    return (
        <>
            <div>
                <h1>{restObj.heading}</h1>
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
                        <textarea style={{resize: 'none'}} id="review" name="review" placeholder="Write a review!" rows="6" cols="50" />
                    </div>
                    <StarRating rating={userRating} onRate={handleRate} />
                    <button type="submit">Submit Review</button>
                </form>
            </div>
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
        </>
    );
}

export default Restaurant;
