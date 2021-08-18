import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Route, Redirect } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

export default function AuthenticatedRoute({ children, ...rest }) {
  const user = useTracker(() => Meteor.user());
  const isLoading = useTracker(() => Meteor.loggingIn() || Meteor.loggingOut());

  const checkPermission = ({ location }) => {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (user) {
      return children;
    }

    return (
      <Redirect
        to={{
          pathname: '/',
          state: { from: location },
        }}
      />
    );
  };
  return <Route {...rest} render={checkPermission} />;
}
