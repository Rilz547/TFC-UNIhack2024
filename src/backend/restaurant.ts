import { Restaurant } from './interfaces';
import HTTPError from 'http-errors';
import { BAD_REQUEST } from './httpsConsts';

/**
 * Creates a restaurant
 * @param {string} name name of restaurant
 * @param {string} cuisine cuisine of restaurant
 * @param {string} location location of restaurant
 * @param {number} phone phone number of restaurant
 * @param {string} website website of restaurant
 * @param {string} description
 * @returns {string} 
 */

export function createRestaurant(name: string, cuisine: string, location: string, phone: string, website: string, description: string) {
    if (phone.length != 10) {
        throw HTTPError(BAD_REQUEST, 'phone number must be 10 characters long');
    }

    const newRestaurant: Restaurant = {
        name: name,
        cuisine: cuisine,
        location: location,
        operatingHours: ["10am-5pm, 10am-5pm, 10am-5pm, 11am-9pm, 10am-5pm, 10am-2pm, 9am-3pm"],
        phone: phone,
        website: website,
        description: description,
        reviews: []
    }

}

export function 