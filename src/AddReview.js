import { useState } from 'react';

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

const AddReview = (props) => {
    const [userRating, setUserRating] = useState(0);
    const [reviews, setReviews] = useState([]);

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

    const handleRate = (rating) => {
        setUserRating(rating);
    };

    return (
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
                <StarRating rating={userRating} onRate={handleRate} />
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default AddReview;
