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
// import {zodResolver} from '@hookform/resolvers/zod';
import Toast from 'react-native-toast-message';
import Header from '../../../components/core/header/header';

const Login = () => {
  const [validating, setValidating] = useState<boolean>(false);
  const {navigate} = useNavigation<StackNavigationProp<any>>();

  const {control, handleSubmit} = useForm<any>({
    mode: 'onChange',
    // resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: unknown) => {
    setValidating(true);
    console.log(data);
    Toast.show({
      type: 'success',
      text1: 'Login',
      text2: 'Login succcess',
    });
    setValidating(false);
  };

  return (
    <AppWrapper>
      <Scrollable>
        <LoginScreenWrapper>
          <Header />
          <Illustration
            source={require('../../../../assets/images/login-illustration.png')}
          />

          <FormWrapper>
            <HeroText>
              <GreetingText>Se connecter</GreetingText>
            </HeroText>
            <TextInput
              control={control}
              label="Email"
              name="email"
              // icon="mail"
              placeholder="yassine@exemple.com"
            />
            <PasswordWrapper>
              <TextInput
                control={control}
                label="Mot de passe"
                name="password"
                // icon="lock-closed"
                placeholder="Mot de passe"
                type="password"
              />
              <ForgotPasswordSection>
                <LinkWrapper onPress={() => navigate('ResetPassword')}>
                  <LinkText>Mot de passe oublié ?</LinkText>
                </LinkWrapper>
              </ForgotPasswordSection>
            </PasswordWrapper>
            <BottomScreenWrapper>
              <Button
                width="100%"
                loading={validating}
                text="Login"
                onPress={handleSubmit(onSubmit)}
              />
              <SwitchScreensWrapper>
                <SwitchScreensLabel>
                  Vous n’avez pas un compte ?
                </SwitchScreensLabel>
                <SwitchScreensLink onPress={() => navigate('SignUp')}>
                  <SwitchScreensLinkText>S’inscrire</SwitchScreensLinkText>
                </SwitchScreensLink>
              </SwitchScreensWrapper>
            </BottomScreenWrapper>
          </FormWrapper>
          <BottomSpacer />
        </LoginScreenWrapper>
      </Scrollable>
    </AppWrapper>
  );
};

export default Login;
