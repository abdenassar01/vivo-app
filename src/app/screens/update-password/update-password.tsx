import React from 'react';
import {AppWrapper, BottomSpacer} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';
import {
  FormWrapper,
  GreetingText,
  UpdatePasswordScreenWrapper,
} from './update-password.style';
import {t} from 'i18next';
import {useForm} from 'react-hook-form';
import TextInput from '../../components/common/form-fields/text-input/text-input';
import Button from '../../components/common/form-fields/button/button';

const UpdatePassword = () => {
  const {control} = useForm<any>();

  return (
    <AppWrapper>
      <Header openDrower />
      <UpdatePasswordScreenWrapper>
        <BottomSpacer size={0} />
        <FormWrapper>
          <GreetingText>{t('reset-new-password-header')}</GreetingText>
          <TextInput
            control={control}
            label={t('password-input-text')}
            name="password"
            placeholder={t('password-input-text')}
            type="password"
          />
          <TextInput
            control={control}
            label={t('confirm-password-input-text')}
            name="repassword"
            placeholder={t('confirm-password-input-text')}
            type="password"
          />
        </FormWrapper>

        <Button
          onPress={() => console.log('update pass and redirect')}
          text={t('button-validate-text')}
        />
      </UpdatePasswordScreenWrapper>
    </AppWrapper>
  );
};

export default UpdatePassword;
