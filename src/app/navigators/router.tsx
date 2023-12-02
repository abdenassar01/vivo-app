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

const Router = () => {
  const {onBoarding, setOnBoarding} = useOnBoardingStore();
  const [loading, setLoading] = useState<boolean>(false);

  const {currentLang} = useLangStore();

  useEffect(() => {
    setLoading(true);
    getOnBoarding().then(value => {
      if (value === `${true}`) {
        setOnBoarding(true);
      }
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onBoarding, currentLang]);

  // useEffect;

  const login = true;
  return loading ? (
    <ScreenLoader />
  ) : !onBoarding ? (
    <OnboardingStack />
  ) : login ? (
    <AuthenticatedStack />
  ) : (
    <UnAuthenticationStacks />
  );
};

export default Router;
