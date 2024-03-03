import Container from './components/RoundedContainer.js';
import Zoom from '@mui/material/Zoom';
import './Homepage.scss';
import { restaurantsBackend } from './App.js';
import unswLogo from './unsw-logo.png';
import Button from './components/Button';
import { useState, useEffect } from 'react';
import * as Ariakit from '@ariakit/react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import uniDineLogo from './unidine-logo.png';
import Chart from 'react-apexcharts';

// async function fetchData() {
//     const response = await fetch('http://localhost:32341/data');
//     const data = await response.json();

//     return data?.dashboardView;
// }

function Toolbar() {
    const [selection, setSelection] = useState(false);

    // Function to handle button click
    const handleClick = () => {
        setSelection(!selection); // Toggle selection state
    };

    return (
        <div className="toolbar">
            <Ariakit.SelectProvider defaultValue="Sort By">
                <Ariakit.Select className="button2" />
                <Ariakit.SelectPopover
                    portal
                    sameWidth
                    unmountOnHide
                    gutter={4}
                    className="popover"
                >
                    <Ariakit.SelectItem
                        className="select-item"
                        value="Sort By"
                    />
                    <Ariakit.SelectItem
                        className="select-item"
                        value="Price (Highest)"
                    />
                    <Ariakit.SelectItem
                        className="select-item"
                        value="Price (Lowest)"
                    />
                    <Ariakit.SelectItem
                        className="select-item"
                        value="Quality (Highest)"
                    />
                    <Ariakit.SelectItem
                        className="select-item"
                        value="Quality (Lowest)"
                    />
                    <Ariakit.SelectItem
                        className="select-item"
                        value="Service (Highest)"
                    />
                    <Ariakit.SelectItem
                        className="select-item"
                        value="Service (Lowest)"
                    />
                </Ariakit.SelectPopover>
            </Ariakit.SelectProvider>

            <Button
                titleContent={
                    <div style={{ display: 'inline-flex' }}>
                        <i
                            className="fa-solid fa-star"
                            style={{ fontSize: '18px' }}
                        ></i>
                        <div
                            style={{
                                marginLeft: '12px',
                                fontWeight: 'bold',
                            }}
                        >
                            Most Popular
                        </div>
                    </div>
                }
                onClick={handleClick} // Call handleClick function on button click
                height="18px"
                width="130px"
                colour={selection ? 'salmon' : ''} // Change button color based on selection state
                style={
                    selection ? { cursor: 'default' } : { cursor: 'pointer' }
                }
            />
            <Button
                titleContent={
                    <div style={{ display: 'inline-flex' }}>
                        <i
                            className="fa-solid fa-border-all"
                            style={{ fontSize: '18px' }}
                        ></i>
                        <div
                            style={{
                                marginLeft: '12px',
                                fontWeight: 'bold',
                            }}
                        >
                            All
                        </div>
                    </div>
                }
                onClick={handleClick} // Call handleClick function on button click
                height="18px"
                width="50px"
                colour={!selection ? 'salmon' : ''} // Change button color based on selection state
                style={
                    !selection ? { cursor: 'default' } : { cursor: 'pointer' }
                }
            />
        </div>
    );
}

const Homepage = () => {
    const [isFirstLoad, setIsFirstLoad] = useState(false);
    const [data, setData] = useState([]);

    // console.log(fetchData());
    useEffect(() => {
        const hasDialogBeenShown = localStorage.getItem('hasDialogBeenShown');
        if (!hasDialogBeenShown) {
            setIsFirstLoad(true);
            localStorage.setItem('hasDialogBeenShown', 'true');
        }
    }, []);

    useEffect(() => {
        fetch('http://localhost:32341/data')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data.dashboardView);
            });
    }, []);

    return (
        <div style={{ padding: '48px' }}>
            <div className="homepage-title">
                <h1 id="title-text">UniDine </h1>
                <h1 style={{ marginLeft: '16px', fontSize: '50px' }}>
                    <i className="fa-solid fa-at"></i>
                </h1>

                <img id="unsw-logo" alt="UNSW Logo" src={unswLogo} />
            </div>
            <Toolbar />
            <Dialog
                open={isFirstLoad}
                onClose={() => setIsFirstLoad(false)}
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
                    style={{
                        fontSize: '46px',
                        fontStyle: 'bold',
                        fontFamily: 'Varela Round, sans-serif',
                    }}
                >
                    Welcome to UniDine!
                </DialogTitle>

                <DialogContent>
                    <div
                        style={{
                            fontSize: '20px',
                            fontFamily: 'Varela Round, sans-serif',
                        }}
                    >
                        <p>
                            Our platform is designed for students, by students,
                            to help you make the most of your culinary
                            adventures. Whether you're looking for a cozy café
                            to study in, a quick bite between classes, or a
                            hidden gem for a special occasion, UNSW Eats has you
                            covered.
                        </p>
                        <p>
                            Join our community of food enthusiasts to discover
                            and share your favorite dining spots. Upload your
                            own reviews, photos, and recommendations to help
                            your fellow students find the perfect meal. From
                            trendy eateries to classic favorites, UNSW Eats is
                            your go-to resource for all things food on campus.
                        </p>
                        <p>
                            Join us in celebrating the vibrant food scene around
                            UNSW. Let's eat, explore, and share the joy of good
                            food together!
                        </p>
                    </div>
                </DialogContent>
            </Dialog>

            <div className="rest-container">
                {data?.map((element, index) => {
                    return (
                        <Zoom
                            in={true}
                            style={{ transitionDelay: `${160 * index}ms` }}
                        >
                            <div>
                                <Container
                                    heading={element?.title}
                                    content={<>{element?.cuisine}</>}
                                    logo={element?.image}
                                    description={element?.description}
                                    style={{
                                        minWidth: '320px',
                                        height: '120px',
                                    }}
                                    route={`/${element?.id}`}
                                />
                            </div>
                        </Zoom>
                    );
                })}
            </div>
        </div>
    );
};

export default Homepage;
