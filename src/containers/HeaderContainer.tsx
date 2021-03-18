import React, { FunctionComponent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useTypedSelector from 'hooks/useTypedSelector';
import { SIZES } from 'helpers/enums/sizes';
import { onLogout } from 'redux/actions/user.actions';

import Header from 'components/main/Header';

const HeaderContainer: FunctionComponent = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleResize(): void {
      if (isMenuOpened && window.innerWidth > SIZES.mediumTablet) {
        setIsMenuOpened(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const onLogoutClick = () => {
    setIsMenuOpened(false);
    dispatch(onLogout());
  };

  const user = useTypedSelector((state) => state.user.data);

  const toggleMenu = () => setIsMenuOpened(!isMenuOpened);

  return (
    <Header
      isMenuOpened={isMenuOpened}
      onLogoutClick={onLogoutClick}
      toggleMenu={toggleMenu}
      user={user}
    />
  );
};

export default HeaderContainer;
