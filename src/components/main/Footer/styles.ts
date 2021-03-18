import styled, { css } from 'styled-components';

import { FOOTER_HEIGHT } from 'helpers/dimensions';
import { COLORS } from 'helpers/enums/colors';
import { SIZES } from 'helpers/enums/sizes';

import { ReactComponent as FacebookIcon } from './assets/FacebookIcon.svg';
import { ReactComponent as LinkedInIcon } from './assets/LinkedInIcon.svg';
import { ReactComponent as InstagramIcon } from './assets/InstagramIcon.svg';

export const FooterContainer = styled.footer`
  background-color: ${COLORS.black};
  width: 100%;
  height: ${FOOTER_HEIGHT}px;

  @media (max-width: ${SIZES.mediumPhone}px) {
    height: auto;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: ${SIZES.smallDesktop}px;
  margin: 0 auto;
  padding-top: 30px;
  color: ${COLORS.white};

  @media (max-width: ${SIZES.smallDesktop}px) {
    padding: 0 25px;
    padding-top: 30px;
  }

  @media (max-width: ${SIZES.mediumPhone}px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Copyright = styled.p`
  margin-top: 17px;
  font-size: 14px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    padding-right: 50px;
  }

  a {
    color: inherit;
  }

  li:last-child {
    padding-right: 0;
  }

  @media (max-width: ${SIZES.mediumPhone}px) {
    flex-direction: column;
    margin-top: 20px;

    li {
      padding-right: 0;
      padding-bottom: 30px;
    }
  }
`;

export const SocialMediasContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${SIZES.mediumPhone}px) {
    padding-bottom: 20px;
  }
`;

export const SocialMediaIcon = css`
  height: 26px;
  width: 26px;
  fill: ${COLORS.white};
  margin-right: 10px;
`;

export const Facebook = styled(FacebookIcon)`
  ${SocialMediaIcon}
`;

export const Instagram = styled(InstagramIcon)`
  ${SocialMediaIcon}
`;

export const LinkedIn = styled(LinkedInIcon)`
  ${SocialMediaIcon}
`;
