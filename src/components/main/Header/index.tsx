import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import i18next from 'i18next';

import Logo from 'components/commons/Logo';

import { IHeaderProps } from './types';
import {
  HeaderContainer,
  HeaderContent,
  MenuOverlay,
  MenuContainer,
  MenuIconContainer,
  OpenMenuIcon,
  CloseMenuIcon,
  NavLinksContainer,
} from './styles';
import './i18n';

const Header: FunctionComponent<IHeaderProps> = (props: IHeaderProps) => {
  const { isMenuOpened, onLogoutClick, toggleMenu, user } = props;

  const MenuIcon = isMenuOpened ? CloseMenuIcon : OpenMenuIcon;

  return (
    <HeaderContainer data-testid="header">
      <HeaderContent>
        <Logo />
        <MenuOverlay data-testid="menu-overlay" onClick={toggleMenu} showOverlay={isMenuOpened} />
        <MenuContainer data-testid="menu-content">
          <MenuIconContainer>
            <MenuIcon onClick={toggleMenu} />
          </MenuIconContainer>
          <NavLinksContainer showSideMenu={isMenuOpened}>
            <li>
              <NavLink
                activeClassName="active"
                data-testid="nav-link-1"
                onClick={toggleMenu}
                to="/link-1"
              >
                Link 1
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                data-testid="nav-link-2"
                onClick={toggleMenu}
                to="/link-2"
              >
                Link 2
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                data-testid="nav-link-3"
                onClick={toggleMenu}
                to="/link-3"
              >
                Link 3
              </NavLink>
            </li>
            {!user ? (
              <>
                <li>
                  <NavLink
                    activeClassName="active"
                    data-testid="nav-link-signup"
                    onClick={toggleMenu}
                    to="/signup"
                  >
                    {i18next.t('HEADER:SIGNUP')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    data-testid="nav-link-login"
                    onClick={toggleMenu}
                    to="/login"
                  >
                    {i18next.t('HEADER:LOGIN')}
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <span data-testid="nav-link-logout" onClick={onLogoutClick} role="presentation">
                  {i18next.t('HEADER:LOGOUT')}
                </span>
              </li>
            )}
          </NavLinksContainer>
        </MenuContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
