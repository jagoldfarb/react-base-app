export const userFactory = (id: number, override = {}) => ({
  id,
  email: 'johndoe@gmail.com',
  firstName: 'John',
  lastName: 'Doe',
  ...override,
});
