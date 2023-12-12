import React from 'react';
import {
  CentredContent,
  CentredText,
  MainImage,
  SignupSuccessWrapper,
} from './signup-success.style';
import Header from '../../../../components/core/header/header';
import Button from '../../../../components/common/form-fields/button/button';
import {t} from 'i18next';

const SignupSuccess = () => {
  return (
    <SignupSuccessWrapper>
      <Header />
      <CentredContent>
        <MainImage
          source={require('../../../../../assets/images/waiting-illustration.png')}
        />
        <CentredText>{t('awaiting-accepting')}</CentredText>
      </CentredContent>
      <Button disabled onPress={() => {}} text={t('login-header-text')} />
    </SignupSuccessWrapper>
  );
};

export default SignupSuccess;
