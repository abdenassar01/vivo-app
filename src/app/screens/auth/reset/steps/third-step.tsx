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
          <GreetingText>Entrez le nouveau mot de passe</GreetingText>
        </HeroText>
        <TextInput
          control={control}
          label="Mot de passe"
          name="password"
          placeholder="Mot de passe"
          type="password"
        />
        <TextInput
          control={control}
          label="Confirm Mot de passe "
          name="repassword"
          placeholder="Confirm Mot de passe"
          type="password"
        />
      </FormWrapper>
      <BottomScreenWrapper>
        <Button
          width="100%"
          loading={loading}
          text="Valider"
          onPress={handleSubmit(onSubmit)}
        />
        <SwitchScreensWrapper>
          <SwitchScreensLabel>Vous n’avez pas un compte ?</SwitchScreensLabel>
          <SwitchScreensLink onPress={() => navigate('SignUp')}>
            <SwitchScreensLinkText>S’inscrire</SwitchScreensLinkText>
          </SwitchScreensLink>
        </SwitchScreensWrapper>
      </BottomScreenWrapper>
    </ResetStep>
  );
};

export default ResetThirdStep;
