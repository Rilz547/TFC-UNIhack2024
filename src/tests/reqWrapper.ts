import request from 'sync-request';
import { port, url } from '../backend/config.json';
const SERVER_URL = `${url}:${port}`;

// Send requests to reviewPost route
export function reqReviewPost(reviewTitle: string, reviewer: string, rating: number,
    quality: number, price: number, service: number, reviewText: string, restaurantId: number) {
    const res = request('POST', `${SERVER_URL}/reviewPost`, {
        json: {
            reviewTitle: reviewTitle,
            reviewer: reviewer,
            rating: rating,
            quality: quality,
            price: price,
            service: service,
            reviewText: reviewText,
            restaurantId: restaurantId,
        }
    });
    return {
        statusCode: res.statusCode,
        body: JSON.parse(res.body as string)
    };
  }
  