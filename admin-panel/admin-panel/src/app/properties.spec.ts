import { Properties } from './properties';

describe('Properties', () => {
  it('should create an instance', () => {
    expect(new Properties(String,Number, String, String )).toBeTruthy();
  });
});
