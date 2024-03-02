import { Restaurant } from './interfaces';
import HTTPError from 'http-errors';
import { BAD_REQUEST } from './httpsConsts';
import { getNextRestaurantId } from './helpers';

/**
 * Creates a restaurant
 * @param {string} title name of restaurant
 * @param {string} logo name of restaurant
 * @param {string} cuisine cuisine of restaurant
 * @param {string} location location of restaurant
 * @param {number} phone phone number of restaurant
 * @param {string} website website of restaurant
 * @param {string} description
 * @returns {string} 
 */

export function createRestaurant(title: string, logo: string, cuisine: string, location: string, phone: string, website: string, description: string) {
    if (phone.length != 10) {
        throw HTTPError(BAD_REQUEST, 'phone number must be 10 characters long');
    }

    const newRestaurant: Restaurant = {
        id: getNextRestaurantId(),
        title: title,
        logo: logo,
        cuisine: cuisine,
        location: location,
        operatingHours: [],
        phone: phone,
        website: website,
        description: description,
        reviews: []
    }

}

// export function 