import { useState, useMemo, useRef } from 'react';
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
var chart2 = {
    series: [
        {
            name: 'Average Rating',
            data: [3, 5, 5],
        },
    ],
    options: {
        chart: {
            height: 350,
            type: 'radar',
            toolbar: {
                show: false,
            },
        },

        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            radar: {
                size: 120,
                polygons: {
                    strokeColors: '#e9e9e9',
                    fill: {
                        colors: ['#f8f8f8', '#fff'],
                    },
                },
            },
        },

        colors: ['#FA8072'],
        markers: {
            show: false,
            size: 2,
            colors: ['#fff'],
            strokeColor: '#FF4560',
            strokeWidth: 2,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val;
                },
            },
        },
        xaxis: {
            categories: ['Price', 'Quality', 'Service'],
            labels: {
                style: {
                    fontSize: '16px',
                    fontWeight: 'bold',
                },
            },
        },
        yaxis: {
            tickAmount: 5,
            max: 5,
            min: 0,
            labels: {
                formatter: function (val, i) {
                    if (i % 2 === 0) {
                        return val;
                    } else {
                        return '';
                    }
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
    const [problemReport, setProblemReport] = useState(false);

    const handleSubmit = useMemo(
        () => (newReview) => {
            console.log(newReview);
            setReviews([...reviews, newReview]);
        },
        [reviews]
    );

    return (
        <>
            <div className="body" style={{ padding: '48px' }}>
                <div className="toolbar">
                    <Button
                        titleContent={
                            <div style={{ display: 'inline-flex' }}>
                                <i
                                    className="fa-solid fa-backward"
                                    style={{ fontSize: '18px' }}
                                ></i>
                                <div
                                    style={{
                                        marginLeft: '12px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Back
                                </div>
                            </div>
                        }
                        onClick={() => window.history.back()}
                        height="18px"
                        width="80px"
                        colour=""
                    />

                    <Button
                        titleContent={
                            <div style={{ display: 'inline-flex' }}>
                                <i
                                    className="fa-solid fa-circle-exclamation"
                                    style={{ fontSize: '18px' }}
                                ></i>
                                <div
                                    style={{
                                        marginLeft: '12px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Report a Problem
                                </div>
                            </div>
                        }
                        onClick={() => setProblemReport(true)}
                        height="18px"
                        width="160px"
                        colour=""
                    />
                    <Dialog
                        open={problemReport}
                        onClose={() => setProblemReport(false)}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        PaperProps={{
                            sx: {
                                borderRadius: '25px',
                            },
                        }}
                    >
                        <DialogContent>
                            You're inquisitive aren't you 😁 - Time pending, we
                            would like this feature to allow for users to report
                            if elements of the page are wrong (location, menu
                            etc) or if someone posts an offensive review (i.e
                            profanic, racist).
                        </DialogContent>
                    </Dialog>
                </div>
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
                            {/* <Chart
                                options={chart.options}
                                series={chart.series}
                                type="bar"
                                width="300px"
                            /> */}

                            <Chart
                                options={chart2.options}
                                series={chart2.series}
                                type="radar"
                                width="500px"
                                style={{ marginBottom: '-80px' }}
                            />
                        </div>
                        <div>
                            <div
                                style={{
                                    width: '100%',
                                    overflow: 'hidden',
                                    height: '200px',
                                    borderRadius: '25px',
                                }}
                            >
                                <iframe
                                    title="map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.0006216761903!2d151.22543607615722!3d-33.91538357320884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b18b2fcc1c79%3A0x8aac007d77d42ac9!2sGuzman%20y%20Gomez%20-%20UNSW!5e0!3m2!1sen!2sau!4v1709427362370!5m2!1sen!2sau"
                                    width="100%"
                                    height="600"
                                    frameborder="0"
                                    style={{
                                        border: '0',
                                        marginTop: '-150px',
                                    }}
                                ></iframe>
                            </div>
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
                                width="80px"
                                colour="lightblue"
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
                                                                width: '130px',
                                                                height: '100px',
                                                                marginBottom:
                                                                    '16px',
                                                                objectFit:
                                                                    'cover',
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
