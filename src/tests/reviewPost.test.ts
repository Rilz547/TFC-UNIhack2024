import { reviewPost } from '../backend/review'
import { reqReviewPost } from './reqWrapper';
import request from 'sync-request';
import config from '../backend/config.json';

const OK = 200;
const INPUT_ERROR = 400;
const port = config.port;
const url = config.url;


describe('Test reviewPost', () => {
    // test('Test successful echo', () => {
    //     const res = request(
    //       'GET',
    //             `${url}:${port}/echo`,
    //             {
    //               qs: {
    //                 echo: 'Hello',
    //               },
    //               // adding a timeout will help you spot when your server hangs
    //               timeout: 100
    //             }
    //     );
    //     const bodyObj = JSON.parse(res.body as string);
    //     expect(res.statusCode).toBe(OK);
    //     expect(bodyObj).toEqual('Hello');
    // });
    
  

    test('Valid post', () => {
        const res = reqReviewPost(
            'Some Title',
            'Some User',
            4,
            3,
            2,
            1,
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            0
        );
        expect(res.statusCode).toBe(OK);
    });
});