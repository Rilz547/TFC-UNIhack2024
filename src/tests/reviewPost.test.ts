import { reviewPost } from '../backend/review'

describe('Test reviewPost', () => {
    test('Valid post', () => {
        reviewPost('Test Title', "SomeUser", 4, 3, 2, 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 0);
    });   
});