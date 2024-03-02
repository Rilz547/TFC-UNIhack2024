import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Restaurant.scss';
import Button from './components/Button';

import Chart from 'react-apexcharts';

var options = {
    series: [75],
    chart: {
        height: 350,
        type: 'radialBar',
        toolbar: {
            show: true,
        },
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24,
                },
            },
            track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35,
                },
            },

            dataLabels: {
                show: true,
                name: {
                    offsetY: -10,
                    show: true,
                    color: '#888',
                    fontSize: '17px',
                },
                value: {
                    formatter: function (val) {
                        return parseInt(val);
                    },
                    color: '#111',
                    fontSize: '36px',
                    show: true,
                },
            },
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
        },
    },
    stroke: {
        lineCap: 'round',
    },
    labels: ['Percent'],
};

function Restaurant(props) {
    const { restObj } = props;
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    console.log(restObj);

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
                </div>
                {/* <StarRating stars={3.6} /> */}
            </div>
            <Button
                buttonText="Opening Hours"
                onClick={() => setOpen(true)}
                height="20px"
            />
            <Dialog
                open={open}
                onClose={handleClose}
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

const StarRating = ({ stars }) => {
    const totalStars = 5;
    const fullStars = Math.floor(stars);
    const decimalPart = stars - fullStars;
    const lastStarPercentage = decimalPart * 100;

    const starElements = [];

    for (let i = 1; i <= totalStars; i++) {
        if (i <= fullStars) {
            // Render a full yellow star
            starElements.push(
                <div key={i}>
                    <i
                        className="fa-solid fa-star"
                        style={{ color: 'yellow' }}
                    />
                </div>
            );
        } else if (i === fullStars + 1) {
            // Render a partially filled star with gradient color
            const gradientStyle = `linear-gradient(90deg, yellow ${lastStarPercentage}%, transparent ${lastStarPercentage}%)`;
            starElements.push(
                <div key={i}>
                    <i
                        className="fa-solid fa-star"
                        style={{ backgroundImage: gradientStyle }}
                    />
                </div>
            );
        } else {
            // Render an empty star
            starElements.push(
                <div key={i}>
                    <i className="fa-solid fa-star" />
                </div>
            );
        }
    }

    return <div className="star-rating">{starElements}</div>;
};
