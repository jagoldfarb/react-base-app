import React, { FunctionComponent } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { getCookie } from 'helpers/cookies';

const PrivateRoute: FunctionComponent<RouteProps> = ({
  component: Component,
  ...rest
}: RouteProps) => {
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props) =>
        getCookie('accessToken') ? (
          <Component {...props} />
        ) : (
          <Redirect
            push={false}
            to={{
              pathname: '/login',
              state: {
                from: props.location.pathname,
                params: props.location.search,
              },
              search: props.location.search,
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
