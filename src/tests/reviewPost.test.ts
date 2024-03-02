import { reqReviewPost, reqClear } from './reqWrapper';

const OK = 200;

// afterEach(() => {
//     reqClear();
// });

describe('Test reviewPost', () => {    
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