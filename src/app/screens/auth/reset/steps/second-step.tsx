/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  BottomScreenWrapper,
  CentredView,
  FormWrapper,
  GreetingText,
  HeroText,
  ResetStep,
  SwitchScreensLabel,
  SwitchScreensLink,
  SwitchScreensLinkText,
  SwitchScreensWrapper,
} from '../../auth.style';
import {useTheme} from 'styled-components';
import {Swing} from 'react-native-animated-spinkit';
import Button from '../../../../components/common/form-fields/button/button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {t} from 'i18next';

type Props = {
  handleButton: () => void;
};

const ResetSecondStep = ({handleButton}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const theme = useTheme();
  const {navigate} = useNavigation<StackNavigationProp<any>>();

  return (
    <ResetStep>
      <FormWrapper>
        <HeroText>
          <GreetingText>{t('otp-header-text')}</GreetingText>
        </HeroText>
        <CentredView>
          {loading ? (
            <Swing size={60} color={theme.primary} />
          ) : (
            <OTPInputView
              style={{
                width: '80%',
                height: 70,
              }}
              pinCount={4}
              autoFocusOnLoad
              editable
              codeInputFieldStyle={{
                borderColor: theme.border,
                color: theme.secondaryBtnText,
                fontSize: 30,
                fontFamily: 'Poppins-Bold',
                borderWidth: 0.6,
                width: 57.82,
                height: 74.5,
                borderRadius: 12,
              }}
              codeInputHighlightStyle={{
                borderColor: theme.primary,
              }}
              keyboardAppearance="dark"
              onCodeFilled={code => {
                setLoading(true);
                console.log(code);
                setLoading(true);
              }}
            />
          )}
        </CentredView>
      </FormWrapper>
      <BottomScreenWrapper>
        <Button
          width="100%"
          loading={loading}
          text={t('button-reset-text')}
          onPress={() => handleButton()}
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

export default ResetSecondStep;
