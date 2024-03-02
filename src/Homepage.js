import Container from './components/RoundedContainer.js';
import Zoom from '@mui/material/Zoom';
import './Homepage.scss';
import { restaurantsBackend } from './App.js';

const Homepage = () => (
    <div>
        <h1>Homepage</h1>
        <div className="rest-container">
            {restaurantsBackend.map((element, index) => {
                return (
                    <Zoom
                        in={true}
                        style={{ transitionDelay: `${100 * index}ms` }}
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
                                    width: '300px',
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
);

export default Homepage;
