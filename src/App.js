import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Container from './components/RoundedContainer.js';
import Dashboard from './Dashboard.js';
import Homepage from './Homepage.js';
import Restaurant from './Restaurant.js';

// getData().restaurants.map((element, index) => {
//     return console.log(element);
// });

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:32341/data')
            .then((response) => response.json())
            .then((data) => {
                setData(data.restaurants);
            });
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                {data?.map((element, index) => {
                    return (
                        <Route
                            path={`/${element.id}`}
                            element={<Restaurant restObj={element} />}
                            key={index}
                        />
                    );
                })}
            </Routes>
        </Router>
    );
};

export default App;
