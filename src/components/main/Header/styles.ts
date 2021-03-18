import styled, { css } from 'styled-components';

import { HEADER_HEIGHT } from 'helpers/dimensions';
import { COLORS } from 'helpers/enums/colors';
import { SIZES } from 'helpers/enums/sizes';

import { ReactComponent as OpenMenuSVG } from './assets/open-menu.svg';
import { ReactComponent as CloseMenuSVG } from './assets/close-menu.svg';

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background-color: ${COLORS.white};
  z-index: 4;
  box-shadow: 0px 3px 6px ${COLORS.boxShadow};
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: ${SIZES.smallDesktop}px;
  margin: 0 auto;

  @media (max-width: ${SIZES.smallDesktop}px) {
    padding: 0 25px;
  }
`;

export const MenuOverlay = styled.div`
  @media (max-width: ${SIZES.mediumTablet}px) {
    ${({ showOverlay }: { showOverlay: boolean }) =>
      showOverlay &&
      css`
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: ${COLORS.boxShadow};
      `}
  }
`;

export const MenuContainer = styled.div`
  display: contents;
`;

export const MenuIconContainer = styled.div`
  display: none;

  @media (max-width: ${SIZES.mediumTablet}px) {
    display: flex;
    z-index: 3;
  }
`;

export const MenuIcon = css`
  cursor: pointer;
`;

export const OpenMenuIcon = styled(OpenMenuSVG)`
  ${MenuIcon}
`;

export const CloseMenuIcon = styled(CloseMenuSVG)`
  ${MenuIcon}
`;

export const NavLinksContainer = styled.ul`
  display: flex;

  li {
    display: inline-block;
    padding: 0 25px;

    &:last-child {
      padding-right: 0;
    }
  }

  li a,
  li span {
    color: ${COLORS.black};
    font-size: 14px;
    cursor: pointer;
  }

  li a.active {
    color: ${COLORS.greenChristi};
  }

  @media (max-width: ${SIZES.mediumTablet}px) {
    position: fixed;
    top: 0;
    right: ${({ showSideMenu }: { showSideMenu: boolean }) => (showSideMenu ? '0' : '-300px')};
    flex-direction: column;
    width: 300px;
    height: 100vh;
    margin: 0;
    padding: 70px 0px;
    background-color: ${COLORS.white};
    transition: all 0.3s ease-in-out;

    li {
      padding: 15px 0;
      text-align: center;
    }
  }
`;
