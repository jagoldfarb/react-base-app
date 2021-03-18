import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { SOCIAL_MEDIAS } from 'helpers/enums/socialMedias';

import Logo from 'components/commons/Logo';

import {
  FooterContainer,
  FooterContent,
  LogoContainer,
  Copyright,
  InfoContainer,
  LinksContainer,
  SocialMediasContainer,
  Facebook,
  Instagram,
  LinkedIn,
} from './styles';

const Footer: FunctionComponent = () => (
  <FooterContainer data-testid="footer">
    <FooterContent>
      <LogoContainer>
        <Logo isDarkModeOn />
        <Copyright>&copy; Copyright {new Date().getFullYear()}</Copyright>
      </LogoContainer>
      <InfoContainer>
        <LinksContainer data-testid="footer-links-container">
          <li>
            <Link to="/link-1">Link 1</Link>
          </li>
          <li>
            <Link to="/link-2">Link 2</Link>
          </li>
          <li>
            <Link to="/link-3">Link 3</Link>
          </li>
        </LinksContainer>
        <SocialMediasContainer data-testid="footer-social-medias-container">
          <a target="_blank" rel="noopener noreferrer" href={SOCIAL_MEDIAS.linkedIn.link}>
            <LinkedIn />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={SOCIAL_MEDIAS.instagram.link}>
            <Instagram />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={SOCIAL_MEDIAS.facebook.link}>
            <Facebook />
          </a>
        </SocialMediasContainer>
      </InfoContainer>
    </FooterContent>
  </FooterContainer>
);

export default Footer;
