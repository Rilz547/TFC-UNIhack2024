// import Chart from 'react-apexcharts';
// import Container from './components/RoundedContainer.js';
// import Zoom from '@mui/material/Zoom';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Container from './components/RoundedContainer.js';

const restaurants = [
    {
        heading: 'Guzman Y Gomez',
        content: 'Gods Palace',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Guzman_y_Gomez_logo.svg/1200px-Guzman_y_Gomez_logo.svg.png',
        description:
            'Guzman y Gomez (GYG) is a fast-casual Mexican restaurant chain that originated in Australia and has expanded globally. Specializing in fresh and authentic Mexican cuisine, GYG offers a diverse menu featuring tacos, burritos, nachos, and other traditional Mexican dishes made with high-quality ingredients. The chain is known for its commitment to sustainability and ethically sourced produce, as well as its vibrant and welcoming atmosphere.',
    },
    {
        heading: 'McDonalds',
        content: 'Makes me regret eating it',
        logo: 'https://seeklogo.com/images/M/mcdonald-s-logo-2325D6C1EF-seeklogo.com.png',
        description:
            "McDonald's is a globally recognized fast-food restaurant chain known for its iconic golden arches. Founded in 1940 in the United States, McDonald's has grown to become one of the largest and most successful fast-food franchises worldwide. The menu typically includes burgers, fries, chicken sandwiches, salads, and breakfast items, catering to a wide range of tastes and preferences. McDonald's is renowned for its efficient service, consistency, and affordability, making it a popular choice for millions of customers around the world.",
    },
    {
        heading: 'NeNe Chicken',
        content: 'Greasy Goodness',
        logo: 'https://pbs.twimg.com/profile_images/1077083301582491648/RYH9fnAb_400x400.jpg',
        description:
            'NeNe Chicken is a South Korean-based fast-food chain specializing in Korean-style fried chicken. Founded in 1999, it has since expanded internationally, gaining popularity for its unique flavors and high-quality chicken. NeNe Chicken offers a variety of menu options, including crispy fried chicken pieces coated in a range of signature sauces such as Original, Swicy (sweet and spicy), Freaking Hot, and Garlic Snow. The chain prides itself on using fresh ingredients and delivering flavorful, satisfying meals to its customers, making it a favorite destination for chicken lovers worldwide.',
    },
];

// App.js

function App() {
    return (
        <>
            <Router>
                <button type="button">
                    <Link to="/container">Dashboard</Link>
                </button>
                <Routes>
                    <Route path="/container" element={<Container />} />
                </Routes>
            </Router>
        </>
    );
}

// function App() {
//     return (
//         <>
//             <div className="App">
//                 {/* <div
//                     style={{
//                         display: 'inline-flex',
//                         gap: '32px',
//                         marginTop: '32px',
//                         marginLeft: '32px',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <h2>Some Cool Icons</h2>
//                     <i className="fa-solid fa-circle" />
//                     <i className="fa-solid fa-square" />
//                     <i className="fa-solid fa-house" />
//                     <i className="fa-solid fa-moon" />
//                 </div> */}

//                 {/* <h2 style={{ marginLeft: '32px' }}>
//                     Some Big ol Buttons (give em a click)
//                 </h2> */}
//                 {/* <div className="rest-container">
//                     {restarunts.map((element, index) => {
//                         return (
//                             <Zoom
//                                 in={true}
//                                 style={{ transitionDelay: `${100 * index}ms` }}
//                             >
//                                 <div
//                                     style={{
//                                         background: `${
//                                             element?.colour
//                                                 ? element?.colour
//                                                 : ''
//                                         }`,
//                                     }}
//                                 >
//                                     <Container
//                                         heading={element.heading}
//                                         content={<>{element.content} </>}
//                                         logo={element?.logo}
//                                         description={element?.description}
//                                         style={{
//                                             width: '300px',
//                                             height: '120px',
//                                         }}
//                                     />
//                                 </div>
//                             </Zoom>
//                         );
//                     })}
//                 </div> */}
//                 <Router />
//             </div>
//         </>
//     );
// }

export default App;
