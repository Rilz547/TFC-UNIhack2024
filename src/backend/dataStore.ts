import { Data } from "./interfaces";

let data: Data = {
    restaurants: [],
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