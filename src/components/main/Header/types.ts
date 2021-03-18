import { IUser } from 'types/user.types';

export interface IHeaderProps {
  isMenuOpened: boolean;
  onLogoutClick: () => void;
  toggleMenu: () => void;
  user: null | IUser;
}
