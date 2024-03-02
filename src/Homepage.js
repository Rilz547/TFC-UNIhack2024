import Container from './components/RoundedContainer.js';
import Zoom from '@mui/material/Zoom';
import './Homepage.scss';
import { restaurantsBackend } from './App.js';
import unswLogo from './unsw-logo.png';

const Homepage = () => (
    <div style={{ padding: '48px' }}>
        <div className="homepage-title">
            <h1 id="title-text">Food Reviews for </h1>
            <img id="unsw-logo" alt="UNSW Logo" src={unswLogo} />
        </div>
        <div
            className="bottom-container"
            style={{ display: 'inline-flex', width: '100%', gap: '32px' }}
        >
            <div className="description">
                <p>
                    Welcome to UNSW Eats, the ultimate guide to dining around
                    the University of New South Wales! Our platform is designed
                    for students, by students, to help you make the most of your
                    culinary adventures. Whether you're looking for a cozy café
                    to study in, a quick bite between classes, or a hidden gem
                    for a special occasion, UNSW Eats has you covered.
                </p>
                <p>
                    Join our community of food enthusiasts to discover and share
                    your favorite dining spots. Upload your own reviews, photos,
                    and recommendations to help your fellow students find the
                    perfect meal. From trendy eateries to classic favorites,
                    UNSW Eats is your go-to resource for all things food on
                    campus.
                </p>
                <p>
                    Join us in celebrating the vibrant food scene around UNSW.
                    Let's eat, explore, and share the joy of good food together!
                </p>
                <p>- The UNSW Food Dev Team</p>
            </div>
            <div className="rest-container">
                {restaurantsBackend.map((element, index) => {
                    return (
                        <Zoom
                            in={true}
                            style={{ transitionDelay: `${100 * index}ms` }}
                            key={index}
                        >
                            <div
                                style={{
                                    background: `${
                                        element?.colour ? element?.colour : ''
                                    }`,
                                }}
                            >
                                <Container
                                    heading={element.heading}
                                    content={<>{element.content} </>}
                                    logo={element?.logo}
                                    description={element?.description}
                                    style={{
                                        width: '320px',
                                        height: '120px',
                                    }}
                                    route={element?.route}
                                />
                            </div>
                        </Zoom>
                    );
                })}
            </div>
        </div>
    </div>
);

export default Homepage;
