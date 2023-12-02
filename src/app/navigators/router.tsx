import React, {useEffect, useState} from 'react';
import {
  AuthenticatedStack,
  OnboardingStack,
  UnAuthenticationStacks,
} from './stack';
import {useOnBoardingStore} from '../../stores/onboarding';
import {getOnBoarding} from '../../stores/presisting-helpers/onboarding';
import ScreenLoader from '../components/common/loader/screen-loader';
import {useLangStore} from '../../stores/lang';
import {useAuthStore} from '../../stores/auth';
import {getIsAuthenticatd} from '../../utils/token';

const Router = () => {
  const {onBoarding, setOnBoarding} = useOnBoardingStore();
  const {isAuthenticated, setIsAuthenticated} = useAuthStore();
  const [loading, setLoading] = useState<boolean>(false);

  const {currentLang} = useLangStore();

  useEffect(() => {
    setLoading(true);
    getOnBoarding().then(value => {
      if (value === `${true}`) {
        setOnBoarding(true);
      }
      getIsAuthenticatd().then(auth => {
        if (auth === `${true}`) {
          setIsAuthenticated(true);
        }
        setLoading(false);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onBoarding, currentLang, isAuthenticated]);

  return loading ? (
    <ScreenLoader />
  ) : !onBoarding ? (
    <OnboardingStack />
  ) : isAuthenticated ? (
    <AuthenticatedStack />
  ) : (
    <UnAuthenticationStacks />
  );
};

export default Router;
