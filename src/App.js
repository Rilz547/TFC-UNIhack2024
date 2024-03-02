import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Container from './components/RoundedContainer.js';
import Dashboard from './Dashboard.js';
import Homepage from './Homepage.js';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    </Router>
);

const DashboardPage = () => (
    <div>
        <h1>Dashboard</h1>
        <p>TEST</p>
    </div>
);

export default App;
