import React from 'react';
import {
  AuthenticatedStack,
  OnboardingStack,
  UnAuthenticationStacks,
} from './stack';

const Router = () => {
  const onboarding = false;
  const login = false;

  return !onboarding ? (
    <OnboardingStack />
  ) : login ? (
    <AuthenticatedStack />
  ) : (
    <UnAuthenticationStacks />
  );
};

export default Router;
