export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUserDefaultState {
  data: null | IUser;
  loading: boolean;
}
