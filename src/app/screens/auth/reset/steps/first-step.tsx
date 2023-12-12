import React, {useState} from 'react';
import {
  BottomScreenWrapper,
  FormWrapper,
  GreetingText,
  HelperText,
  HeroText,
  ResetStep,
  SwitchScreensLabel,
  SwitchScreensLink,
  SwitchScreensLinkText,
  SwitchScreensWrapper,
} from '../../auth.style';
import TextInput from '../../../../components/common/form-fields/text-input/text-input';
import Button from '../../../../components/common/form-fields/button/button';
import {useForm} from 'react-hook-form';
// import {z} from 'zod';
// import {resetSchema} from '../../../../../types/auth';
// import {zodResolver} from '@hookform/resolvers/zod';
// import {sendPin} from '../../../../../services/auth/reset';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {t} from 'i18next';

type Props = {
  handleButton: () => void;
};

// type FormValues = z.infer<typeof resetSchema>;

const ResetFirstStep = ({handleButton}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const {navigate} = useNavigation<StackNavigationProp<any>>();
  const {control, handleSubmit} = useForm<any>({
    mode: 'onChange',
    // resolver: zodResolver(resetSchema),
  });

  const onSubmit = (data: unknown) => {
    setLoading(true);
    handleButton();
    Toast.show({
      type: 'success',
      text1: 'Sent Pin Successfully',
      text2: 'res.message',
    });
    console.log(data);
    setLoading(false);
  };

  return (
    <ResetStep>
      <FormWrapper>
        <HeroText>
          <GreetingText>{t('reset-header-text1')} </GreetingText>
          <GreetingText>{t('reset-header-text2')}</GreetingText>
          <HelperText>{t('reset-main-text')}</HelperText>
        </HeroText>
        <TextInput
          control={control}
          label={t('phone-input-text')}
          name="phone"
          placeholder={t('phone-input-placeholder')}
        />
      </FormWrapper>
      <BottomScreenWrapper>
        <Button
          width="100%"
          loading={loading}
          text={t('button-reset-text')}
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

export default ResetFirstStep;
