import React, {useState} from 'react';
import {
  SwitchScreensLinkText,
  BottomScreenWrapper,
  FormWrapper,
  GreetingText,
  HeroText,
  ResetStep,
  SwitchScreensLabel,
  SwitchScreensLink,
  SwitchScreensWrapper,
} from '../../auth.style';
import TextInput from '../../../../components/common/form-fields/text-input/text-input';
import Button from '../../../../components/common/form-fields/button/button';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {t} from 'i18next';
// import {zodResolver} from '@hookform/resolvers/zod';

// import Toast from 'react-native-toast-message';

type Props = {
  handleButton: () => void;
};

const ResetThirdStep = ({handleButton}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const {navigate} = useNavigation<StackNavigationProp<any>>();

  const {control, handleSubmit} = useForm<any>({
    mode: 'onChange',
    // resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = (data: any) => {
    setLoading(true);
    console.log(data);
    handleButton();
    setLoading(false);
  };

  return (
    <ResetStep>
      <FormWrapper>
        <HeroText>
          <GreetingText>{t('reset-new-password-header')}</GreetingText>
        </HeroText>
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
      <BottomScreenWrapper>
        <Button
          width="100%"
          loading={loading}
          text={t('button-validate-text')}
          onPress={handleSubmit(onSubmit)}
        />
        <SwitchScreensWrapper>
          <SwitchScreensLabel>{t('dont-have-account')}</SwitchScreensLabel>
          <SwitchScreensLink onPress={() => navigate('SignUp')}>
            <SwitchScreensLinkText>
              {t('register-action-button-text')}
            </SwitchScreensLinkText>
          </SwitchScreensLink>
        </SwitchScreensWrapper>
      </BottomScreenWrapper>
    </ResetStep>
  );
};

export default ResetThirdStep;
