import { Data } from "./interfaces";

let data: Data = {
    restaurants: [
        {
            id: 0,
            title: 'Guzman Y Gomez',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Guzman_y_Gomez_logo.svg/1200px-Guzman_y_Gomez_logo.svg.png',
            cuisine: 'Mexican',
            location: 'University Terraces Lower Kensington Campus, High St, Kensington NSW 2052',
            operatingHours: ['10am-5pm', '10am-5pm', '10am-5pm', '11am-9pm', '10am-5pm', '10am-2pm', '9am-3pm'],
            phone: '03432212112',
            website: 'https://www.guzmanygomez.com.au/',
            description: 'Great mexican good gg',
            reviews: []
        }
    ],
    dashboardView: [],
};

// Use getData() to access the data
function getData() {
    return data;
}

// Use set(newData) to pass in the entire data object, with modifications made
// - Only needs to be used if you replace the data store entirely
function setData(newData: Data) {
    data = newData;
}

export { getData, setData };