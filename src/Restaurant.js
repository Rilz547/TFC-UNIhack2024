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
import Details from './Details.js';
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';

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

function Restaurant(props) {
    const { restObj } = props;
    const [addReview, setAddReview] = useState(false);
    const [reviews, setReviews] = useState([
        {
            title: 'Great Food',
            name: 'Riley',
            description: 'Excellent tacs',
            price: 3,
            quality: 3,
            service: 3,
            image: null,
            time: '02/03/2024',
        },
        {
            title: 'Great Food',
            name: 'Riley',
            description: 'Excellent tacs',
            price: 3,
            quality: 3,
            service: 3,
            image: null,
            time: '02/03/2024',
        },
        {
            title: 'Great Food',
            name: 'Riley',
            description: 'Excellent tacs',
            price: 3,
            quality: 3,
            service: 3,
            image: null,
            time: '02/03/2024',
        },
        {
            title: 'Great Food',
            name: 'Riley',
            description: 'Excellent tacs',
            price: 3,
            quality: 3,
            service: 3,
            image: null,
            time: '02/03/2024',
        },
        {
            title: 'Great Food',
            name: 'Riley',
            description: 'Excellent tacs',
            price: 3,
            quality: 3,
            service: 3,
            image: null,
            time: '02/03/2024',
        },
    ]);
    const [openImage, setOpenImage] = useState(null);

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
                <Fade in={true}>
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
                    </div>
                </Fade>

                <div
                    style={{
                        display: 'inline-flex',
                        width: '100%',
                        gap: '32px',
                    }}
                >
                    <Fade in={true}>
                        <div style={{ width: '40%' }}>
                            <Details content={restObj} />
                            <div className="photos">
                                <ResPhotos />
                            </div>
                        </div>
                    </Fade>

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
                                colour="salmon"
                            />
                        </div>
                        <AddReview
                            open={addReview}
                            setAddReview={setAddReview}
                            handleSubmit={handleSubmit}
                        />

                        <div
                            style={{
                                marginTop: '16px',
                                overflow: 'auto',
                                maxHeight: '680px',

                                padding: '24px',
                            }}
                        >
                            {reviews?.length >= 1 &&
                                reviews?.map((review, index) => (
                                    <Zoom
                                        in={true}
                                        style={{
                                            transitionDelay: `${100 * index}ms`,
                                        }}
                                    >
                                        <div
                                            key={index}
                                            className="user-review"
                                        >
                                            <div>
                                                <div className="title">
                                                    {review?.title}
                                                </div>

                                                <div className="contents">
                                                    <em>User:</em>{' '}
                                                    <span>{review.name}</span>
                                                    <em>
                                                        Date of Review:
                                                    </em>{' '}
                                                    <span>{review.time}</span>
                                                    <em>Review:</em>{' '}
                                                    <span>
                                                        {review.description}
                                                    </span>
                                                </div>
                                            </div>

                                            <div>
                                                <Chart
                                                    options={{
                                                        ...chart.options,
                                                        xaxis: {
                                                            ...chart.options
                                                                .xaxis,
                                                            labels: {
                                                                show: false, // Hide x-axis labels
                                                            },
                                                        },
                                                    }}
                                                    series={[
                                                        {
                                                            data: [
                                                                review?.price,
                                                                review?.quality,
                                                                review?.service,
                                                            ],
                                                        },
                                                    ]}
                                                    type="bar"
                                                    width="200px"
                                                    height="110px"
                                                />
                                            </div>
                                            <div>
                                                {review?.image && (
                                                    <>
                                                        <img
                                                            className="image"
                                                            src={review.image}
                                                            alt="Uploaded review"
                                                            style={{
                                                                width: '100px',
                                                                height: '100px',
                                                                marginBottom:
                                                                    '16px',
                                                            }}
                                                            onClick={() =>
                                                                setOpenImage(
                                                                    index
                                                                )
                                                            }
                                                        />
                                                        <Dialog
                                                            open={
                                                                openImage ===
                                                                index
                                                            }
                                                            onClose={() =>
                                                                setOpenImage(
                                                                    null
                                                                )
                                                            }
                                                            aria-labelledby="alert-dialog-title"
                                                            aria-describedby="alert-dialog-description"
                                                            PaperProps={{
                                                                sx: {
                                                                    borderRadius:
                                                                        '25px',
                                                                },
                                                            }}
                                                        >
                                                            <DialogContent>
                                                                <img
                                                                    className="image"
                                                                    src={
                                                                        review.image
                                                                    }
                                                                    alt="Uploaded review"
                                                                    style={{
                                                                        height: 'auto',
                                                                        width: '100%',
                                                                        display:
                                                                            'block',
                                                                    }}
                                                                />
                                                            </DialogContent>
                                                        </Dialog>
                                                    </>
                                                )}
                                                {!review?.image && (
                                                    <div
                                                        style={{
                                                            width: '100px',
                                                            height: '100px',
                                                        }}
                                                    ></div>
                                                )}
                                            </div>
                                        </div>
                                    </Zoom>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Restaurant;
