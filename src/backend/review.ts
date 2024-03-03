import { Review } from './interfaces';
import { getData, setData } from './dataStore'


/**
 * Given the supplied information will create a new review 
 * for a specified restaurant and return a review Id
 * Will otherwise return an error if:
 * - TBD
 * 
 * @param {string} reviewTitle  - the review's title
 * @param {string} reviewer     - the user's name
 * @param {number} rating       - the rating as a number out of 5
 * @param {number} quality      - the quality rating of the food out of 5
 * @param {number} price        - the price rating of the food out of 5
 * @param {number} service      - the service rating of the food out of 5
 * @param {string} reviewText   - the review in plaintext that the user submits
 * @param {number} restaurantId - the restaurant the review belongs to
 * 
 * @returns {{}} - empty object on successful review
 * @throws {HTTPError} - on invalid parameter
**/
export function reviewPost(reviewTitle: string, reviewer: string, rating: number,
    quality: number, price: number, service: number, reviewText: string, restaurantId: number) {

    const data = getData();
    for (const restaurant of data.restaurants) {
        if (restaurant.id === restaurantId) {
            restaurant.reviews.push({
                reviewTitle: reviewTitle,
                reviewer: reviewer,
                date: new Date().getTime(),
                rating: rating,
                likes: 0,
                quality: quality,
                price: price,
                service: service,
                reviewText: reviewText
            });
            
            
        }
    }
    

    return {};
}