import { Review } from "./interfaces";

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
 * @returns {{ reviewId: number }} - on successful post
 * @throws {HTTPError} - on invalid parameter
**/
export function reviewPost(reviewTitle: string, reviewer: string, rating: number,
    quality: number, price: number, service: number, reviewText: string): number {
    const newReview: Review = {
        reviewTitle: reviewTitle,
        reviewer: reviewer,
        date: new Date(),
        rating: rating,
        likes: 0,
        quality: quality,
        price: price,
        service: service,
        reviewText: reviewText
    }

    return 0;
}