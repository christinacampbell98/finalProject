import { Listings } from './listings';

describe('Listings', () => {
  it('should create an instance', () => {
    expect(new Listings(Number, String, String, String, String, String)).toBeTruthy();
  });
});
