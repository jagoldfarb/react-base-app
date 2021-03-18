import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

import { HEADER_HEIGHT, FOOTER_HEIGHT } from 'helpers/dimensions';

import HeaderContainer from 'containers/HeaderContainer';
import Footer from 'components/main/Footer';

interface ILayoutContainerProps {
  children: ReactNode;
}

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ViewContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px);
  margin-top: ${HEADER_HEIGHT}px;
`;

const LayoutContainer: FunctionComponent<ILayoutContainerProps> = (
  props: ILayoutContainerProps,
) => {
  const { children } = props;

  return (
    <GlobalContainer>
      <HeaderContainer />
      <ViewContainer>{children}</ViewContainer>
      <Footer />
    </GlobalContainer>
  );
};

export default LayoutContainer;
