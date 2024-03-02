import { getData, setData } from "./dataStore";
import { Restaurant, Data } from "./interfaces";

/**
 * Generates the next expected id for a restaurant
 * @returns {number}
 */
export function getNextRestaurantId(): number {
    const dataStore = getData();
  
    if (dataStore.restaurants.length == 0) {
      return 0;
    }
  
    const allRestaurantIds = dataStore.restaurants.map(
      (restObject) => restObject.id
    );
  
    return Math.max(...allRestaurantIds) + 1;
}

/**
 * Returns the restaurant associated with the given id
 * @param {number} id restaurant's id
 * @returns {number}
 */
export function getRestaurant(id: number): Restaurant | null {
    const dataStore = getData();
  
    for (const restaurant of dataStore.restaurants) {
        if (restaurant.id === id) {
          return restaurant;
        }
    }
    
    return null;
}

/**
 * Generates the next expected id for a restaurant
 * @param {number} id
 * @returns {number}
 */
export function getNextReviewId(id: number): number {
    const restaurant = getRestaurant(id);
    if (restaurant == null) {
        return 0;
    }

    return restaurant.reviews.length + 1;
}

/**
  * Resets the internal data of the application to its initial state
  *
  * @returns {{}} - on successful clear, returns an empty object
**/
export function clear() {
    const data: Data = { restaurants: [], dashboardView: [] };
    setData(data);
    
    return {};
}
