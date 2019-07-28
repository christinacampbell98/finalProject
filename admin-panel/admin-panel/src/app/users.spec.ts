import { Users } from './users';

describe('Users', () => {
  it('should create an instance', () => {
    expect(new Users(String,String,String, Number, Boolean)).toBeTruthy();
  });
});
