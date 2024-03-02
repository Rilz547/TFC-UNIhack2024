import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Container from './components/RoundedContainer.js';
import Dashboard from './Dashboard.js';
import Homepage from './Homepage.js';
import Restaurant from './Restaurant.js';

export const restaurantsBackend = [
    {
        heading: 'Guzman Y Gomez',
        content: 'Gods Palace',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Guzman_y_Gomez_logo.svg/1200px-Guzman_y_Gomez_logo.svg.png',
        description:
            'Guzman y Gomez (GYG) is a fast-casual Mexican restaurant chain that originated in Australia and has expanded globally. Specializing in fresh and authentic Mexican cuisine, GYG offers a diverse menu featuring tacos, burritos, nachos, and other traditional Mexican dishes made with high-quality ingredients. The chain is known for its commitment to sustainability and ethically sourced produce, as well as its vibrant and welcoming atmosphere.',
        route: '/0',
    },
    {
        heading: 'Mcdonalds',
        content: 'Gods Palace',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Guzman_y_Gomez_logo.svg/1200px-Guzman_y_Gomez_logo.svg.png',
        description:
            'Guzman y Gomez (GYG) is a fast-casual Mexican restaurant chain that originated in Australia and has expanded globally. Specializing in fresh and authentic Mexican cuisine, GYG offers a diverse menu featuring tacos, burritos, nachos, and other traditional Mexican dishes made with high-quality ingredients. The chain is known for its commitment to sustainability and ethically sourced produce, as well as its vibrant and welcoming atmosphere.',
        route: '/1',
    },
];

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            {restaurantsBackend.map((element, index) => {
                return (
                    <Route
                        path={restaurantsBackend[index].route}
                        element={
                            <Restaurant
                                heading={restaurantsBackend[index].heading}
                            />
                        }
                    />
                );
            })}
        </Routes>
    </Router>
);

export default App;
