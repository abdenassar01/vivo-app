import React, {useState} from 'react';
import {AppWrapper, BottomSpacer} from '../../../../utils/shared-styles';
import {
  BottomScreenWrapper,
  ForgotPasswordSection,
  FormWrapper,
  GreetingText,
  HeroText,
  Illustration,
  LinkText,
  LinkWrapper,
  LoginScreenWrapper,
  PasswordWrapper,
  Scrollable,
  SwitchScreensLabel,
  SwitchScreensLink,
  SwitchScreensLinkText,
  SwitchScreensWrapper,
} from '../auth.style';
import TextInput from '../../../components/common/form-fields/text-input/text-input';
import Button from '../../../components/common/form-fields/button/button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Toast from 'react-native-toast-message';
import Header from '../../../components/core/header/header';
import {t} from 'i18next';
import {useAuthStore} from '../../../../stores/auth';
import {loginSchema} from '../../../../../types/user';
import {z} from 'zod';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import {useLangStore} from '../../../../stores/lang';

type FormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const {background} = useTheme();
  const {currentLang} = useLangStore();
  const [validating, setValidating] = useState<boolean>(false);
  const {navigate} = useNavigation<StackNavigationProp<any>>();
  const {setIsAuthenticated} = useAuthStore();
  const {control, handleSubmit} = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: FormValues) => {
    setValidating(true);
    console.log(data);
    Toast.show({
      type: 'success',
      text1: 'Login',
      text2: 'Login succcess',
    });
    setIsAuthenticated(true);
    setValidating(false);
  };

  return (
    <AppWrapper>
      <StatusBar backgroundColor={background} />
      <Scrollable showsVerticalScrollIndicator={false}>
        <LoginScreenWrapper>
          <Header />
          <Illustration
            source={require('../../../../assets/images/login-illustration.png')}
          />

          <FormWrapper>
            <HeroText>
              <GreetingText>{t('login-header-text')}</GreetingText>
            </HeroText>
            <TextInput
              control={control}
              label={t('phone-input-text')}
              name="phone"
              placeholder={t('phone-input-text')}
            />
            <PasswordWrapper>
              <TextInput
                control={control}
                label={t('password-input-text')}
                name="password"
                placeholder={t('password-input-text')}
                type="password"
              />
              <ForgotPasswordSection>
                <LinkWrapper onPress={() => navigate('ResetPassword')}>
                  <LinkText>{t('forget-password-text')}</LinkText>
                </LinkWrapper>
              </ForgotPasswordSection>
            </PasswordWrapper>
            <BottomScreenWrapper>
              <Button
                width="100%"
                loading={validating}
                text={t('login-action-button-text')}
                onPress={handleSubmit(onSubmit)}
              />
              <SwitchScreensWrapper lang={currentLang}>
                <SwitchScreensLabel>
                  {t('dont-have-account')}
                </SwitchScreensLabel>
                <SwitchScreensLink onPress={() => navigate('SignUp')}>
                  <SwitchScreensLinkText>
                    {t('register-action-button-text')}
                  </SwitchScreensLinkText>
                </SwitchScreensLink>
              </SwitchScreensWrapper>
            </BottomScreenWrapper>
          </FormWrapper>
          <BottomSpacer size={30} />
        </LoginScreenWrapper>
      </Scrollable>
    </AppWrapper>
  );
};

export default Login;
