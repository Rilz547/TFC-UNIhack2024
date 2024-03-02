import { useState, useMemo } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Restaurant.scss';
import Button from './components/Button';
import Chart from 'react-apexcharts';
import ResPhotos from './ResPhotos.js';
import AddReview from './AddReview.js';

var chart = {
    series: [
        {
            data: [4, 3, 5],
        },
    ],
    options: {
        chart: {
            type: 'bar',
            toolbar: {
                show: false,
            },
            height: 350,
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            },
        },
        style: {
            colors: function ({ value }) {
                if (value === 4) {
                    return 'orange'; // Color value 4 as orange
                } else if (value === 3) {
                    return 'yellow'; // Color value 3 as yellow
                } else if (value === 5) {
                    return 'red'; // Color value 5 as red
                } else {
                    return '#008FFB'; // Default color for other values
                }
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ['Price', 'Quality', 'Service'],
            max: 5,
            min: 0,
            tickPlacement: 'on',
            labels: {
                formatter: function (val) {
                    return parseInt(val) === val ? val : '';
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '12px',
                    fontWeight: 'bold',
                },
            },
        },
    },
};

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

    const handleSubmit = useMemo(
        () => (newReview) => {
            console.log(newReview);
            setReviews([...reviews, newReview]);
        },
        [reviews]
    );

    return (
        <>
            <div style={{ padding: '48px' }}>
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
                    <div>
                        <Chart
                            options={chart.options}
                            series={chart.series}
                            type="bar"
                            width="300px"
                        />
                    </div>
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
                </div>
                <div
                    style={{
                        display: 'inline-flex',
                        width: '100%',
                        gap: '32px',
                    }}
                >
                    <div className="photos">
                        <ResPhotos />
                    </div>
                    <div className="review-container">
                        <div className="review-heading">
                            <i class="fa-solid fa-clipboard"></i>Reviews
                            <Button
                                titleContent={
                                    <div style={{ display: 'inline-flex' }}>
                                        <i
                                            className="fa-solid fa-plus"
                                            style={{
                                                fontSize: '18px',
                                                color: 'black',
                                            }}
                                        ></i>
                                        <div
                                            style={{
                                                marginLeft: '12px',
                                                fontWeight: 'bold',
                                                color: 'black',
                                            }}
                                        >
                                            Review
                                        </div>
                                    </div>
                                }
                                onClick={() => setAddReview(true)}
                                height="20px"
                                colour="#F95738"
                            />
                        </div>
                        <AddReview
                            open={addReview}
                            setAddReview={setAddReview}
                            handleSubmit={handleSubmit}
                        />

                        {reviews?.length >= 1 &&
                            reviews?.map((review, index) => (
                                <div key={index} className="user-review">
                                    <div className="title">{review?.title}</div>

                                    <div className="contents">
                                        <em>User:</em>{' '}
                                        <span>{review.name}</span>
                                        <em>Review:</em>{' '}
                                        <span>{review.description}</span>
                                    </div>
                                </div>
                            ))}
                    </div>
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
}

export default Restaurant;
