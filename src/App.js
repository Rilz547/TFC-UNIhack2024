import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/RoundedContainer.js';
import Dashboard from './Dashboard.js';

const restarunts = [
    {
        heading: 'Guzman Y Gomez',
        content: 'Gods Palace',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Guzman_y_Gomez_logo.svg/1200px-Guzman_y_Gomez_logo.svg.png',
        description:
            'Guzman y Gomez (GYG) is a fast-casual Mexican restaurant chain that originated in Australia and has expanded globally. Specializing in fresh and authentic Mexican cuisine, GYG offers a diverse menu featuring tacos, burritos, nachos, and other traditional Mexican dishes made with high-quality ingredients. The chain is known for its commitment to sustainability and ethically sourced produce, as well as its vibrant and welcoming atmosphere.',
        route: '/dashboard',
    },
    // Add other restaurants with the route property set to '/dashboard'
];

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <div className="rest-container">
                {restarunts
                    .filter((element) => element.route === '/dashboard')
                    .map((element, index) => (
                        <div key={index}>
                            <Container
                                heading={element.heading}
                                content={<>{element.content} </>}
                                logo={element.logo}
                                description={element.description}
                                style={{
                                    width: '300px',
                                    height: '120px',
                                }}
                                route={element.route}
                            />
                        </div>
                    ))}
            </div>
        </Router>
    );
}

export default App;
